/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import {
  nomesIniciaisMaiusculas,
  onlyNumber,
  telMask,
  validaCelular,
  validateEmail,
} from '../../helpers/regex';

import logoMF from '../../assets/iconLogo.svg';
import Image from 'next/image';

const SectionForm = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '600px',
  flex: 'none',
  padding: '20px 0px 0px',

  '& .sectionDescription': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    gap: '20px',
    padding: '20px 20px 40px',

    '& p': {
      width: '100%',
      maxWidth: '500px',
      lineHeight: '1.5',
      textAlign: 'center',
    },

    '@bp2': {},
  },

  '& .form': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    flex: 1,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    position: 'relative',

    '& .form-group': {
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100%',
      maxWidth: '500px',
      height: '460px',
      top: '-20px',
      left: '50%',
      border: '1px solid #fff',
      gap: '20px',
      padding: '20px ',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(5px)',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',

      '& .imgLogo': {
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '60px',
        color: '$primary',
      },

      '@bp2': {
        maxWidth: '360px',
        height: '440px',
        top: '-20px',
        transform: 'translateX(-50%)',
      },

      '& .formInputs': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        padding: '20px 0',
      },
      '& .footerForm': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: 'fit-content',
        padding: '20px 0',

        '& .checkbox': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          height: 'fit-content',
          padding: '10px 0',

          '& input': {
            width: '15px',
            height: '15px',
          },
          '& label': {
            fontSize: '0.8rem',
            color: '#fff',
          },
        },
      },

      '& .inputGroup': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 'fit-content',
        justifyContent: 'space-between',
        gap: '10px',
        borderBottom: '2px solid #fff',
        position: 'relative',

        '& label': {
          width: '100px',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        },

        '& input': {
          width: '100%',
          height: '40px',
          backgroundColor: 'transparent',
          border: 'none',
          alignItems: 'flex-end',
          color: '$yellow',
          fontSize: '1.2rem',
          fontWeight: 'bold',

          '&::placeholder': {
            color: 'rgba(255, 255, 255, 0.5)',
          },
        },
        '& .error': {
          color: '#de2121',
          position: 'absolute',
          left: '0',
          bottom: '-18px',
          fontSize: '0.8rem',
          fontWeight: '500',
        },
      },
    },
  },
});

const Button = styled('button', {
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  border: 'none',
  height: '40px',
  width: 'fit-content',
  padding: '0 30px',
  background: '#FF9900',
  borderRadius: '20px',

  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover:not(:disabled)': {
    background: '#ffaa2a',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },

  '&:disabled': {
    background: '#ccc',
    cursor: 'not-allowed',
  },
});

const Form = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  //   Form validation state
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    telefone: false,
  });

  const [buttonText, setButtonText] = useState('QUERO AS NOVIDADES');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = { fullname: false, email: false, telefone: false };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0 || validateEmail(email) === false) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (validaCelular(telefone) === false) {
      tempErrors['telefone'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Enviando...');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: nomesIniciaisMaiusculas(fullname),
          telefone: telefone,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('QUERO AS NOVIDADES');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('QUERO AS NOVIDADES');
    }
  };

  return (
    <SectionForm id='contato'>
      <div className='sectionDescription'>
        <h1>FIQUE POR DENTRO</h1>
        <p>
          Acompanhe todas as novidades em primeira mão, são promoções
          exclusivas, lançamentos de produtos, novos sabores e muito mais!
        </p>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <div className='imgLogo'>
              <Image src={logoMF} alt='logo' />
            </div>
            <div className='formInputs'>
              <div className='inputGroup'>
                <label htmlFor='fullname'>Nome</label>
                <input
                  type='text'
                  name='fullname'
                  id='fullname'
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder='Digite seu nome'
                />
                {errors.fullname && (
                  <span className='error'>Nome é obrigatório</span>
                )}
              </div>
              <div className='inputGroup'>
                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder='Digite seu e-mail'
                />
                {errors.email && (
                  <span className='error'>E-mail é obrigatório</span>
                )}
              </div>

              <div className='inputGroup'>
                <label htmlFor='telefone'>Telefone</label>
                <input
                  type='text'
                  name='telefone'
                  id='telefone'
                  value={telMask(telefone)}
                  onChange={(e) => {
                    setTelefone(e.target.value);
                  }}
                  onKeyPress={onlyNumber}
                  maxLength={15}
                  placeholder='Digite seu telefone'
                />
                {errors.telefone && (
                  <span className='error'>Telefone inválido</span>
                )}
              </div>
            </div>

            <div className='footerForm'>
              <Button type='submit' disabled={!isChecked}>
                {buttonText}
              </Button>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='checkbox'
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor='checkbox'>
                  <span>Aceito receber comunicações da Main Foods</span>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </SectionForm>
  );
};

export default Form;
