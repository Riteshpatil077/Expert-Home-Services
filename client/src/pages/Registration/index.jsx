import React, { useState, useEffect } from 'react';
import { Input, Form, Divider, notification, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import axios from 'axios';

import Logo from '../../Layout/Logo';
import API from '../../api';
import PublicLayout from '../../Layout/PublicLayout';

function SignUp() {
  const [form] = Form.useForm();
  const [isMerchant, setIsMerchant] = useState(false);
  const [state, setState] = useState({
    loader: false,
    error: false,
    message: 'Please provide valid details',
    type: 'error',
  });
  const navigate = useNavigate();

  const registration = () => {
    setState({ ...state, loader: true });
    const data = form.getFieldsValue();
    data.isMerchant = isMerchant;
    axios
      .post(API.registration, data)
      .then((res) => {
        if (res.status) {
          setState({
            ...state,
            loader: false,
            message: 'Registration Success',
            type: 'success',
            error: true,
          });
          navigate('/login');
        } else {
          setState({ ...state, error: true, loader: false });
        }
      })
      .catch((e) => {
        setState({ ...state, error: true, loader: false });
      });
  };

  useEffect(() => {
    if (state.error) {
      notification.open({
        message: state.message,
        type: state.type,
      });
      setState({ ...state, error: false });
    }
  }, [state.error, state.message, state.type]);

  return (
    <PublicLayout>
      <div className='w-full  p-8 bg-white rounded-lg shadow-lg text-center'>
        <div className='flex align-middle justify-center items-center'>
          <Logo />
        </div>
        <h1 className='text-3xl font-bold mt-4'>Welcome to HomeServices</h1>
        <p className='text-lg mt-2'>Please register your account</p>
        <Form form={form} layout='vertical' className='space-y-4 mt-6'>
          <Form.Item
            name='name'
            label='Username'
            rules={[
              {
                required: true,
                message: 'Please enter your username',
              },
            ]}
          >
            <Input placeholder='John Doe' />
          </Form.Item>
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder='johndoe@gmail.com' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password
              placeholder='Password'
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            label='Confirm password'
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords do not match'),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder='Confirm Password'
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <div className='flex justify-between items-center'>
            <div>
              <Checkbox
                onChange={(e) => {
                  setIsMerchant(e.target.checked);
                }}
              >
                Merchant/Owner/Worker
              </Checkbox>
            </div>
          </div>
          <button
            type='button'
            disabled={state.loader}
            onClick={registration}
            className='w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50'
          >
            {state.loader ? 'Registering...' : 'Registration'}
          </button>
        </Form>
        <Divider className='mt-8'>Or Register Up With</Divider>
        <div className='flex justify-center space-x-4'>
          <button type='button' className='flex items-center justify-center border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-gray-700'>
            <GoogleOutlined className='mr-2' /> Google
          </button>
          <button type='button' className='flex items-center justify-center border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-gray-700'>
            <FacebookOutlined className='mr-2' /> Facebook
          </button>
        </div>
        <p className='text-lg mt-8'>
          Already Have an Account?{' '}
          <Link className='text-blue-400' to='/login'>
            Login
          </Link>
        </p>
      </div>
    </PublicLayout>
  );
}

export default SignUp;
