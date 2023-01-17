import React from 'react';
import { Button } from '../../../../components/button/button';
import { Input } from './input/input';
import { FormFooter, FormWrapper, FormHeader } from './formComponentStyle';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { validateForm } from '../../../../services/formValidator/validateService';

export const FormComponent = ({
  titleText,
  buttonText,
  inputContent,
  children,
  onSubmit,
  setErrors,
  comments,
  components,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const renderInput = inputs => {
    return inputs.map(input => {
      return (
        <li key={input.point}>
          <Input
            components={components}
            control={control}
            {...input}
            register={register}
            errors={errors}
          />
        </li>
      );
    });
  };

  const getSubmitData = inputField => {
    const validateResult = validateForm(inputField, { password: 'confirm password' });

    if (validateResult.error) {
      setError(validateResult.name, { ...validateResult });
    } else {
      return onSubmit(inputField);
    }
  };

  return (
    <FormWrapper>
      <FormHeader>
        <div className="form_header__wrapper">
          <h2>{titleText}</h2>
        </div>
        <p>{comments}</p>
      </FormHeader>
      <form onSubmit={handleSubmit(getSubmitData)}>
        <ul> {renderInput(inputContent)}</ul>
        {children}
        <FormFooter>
          <Button components={components} type="submit" {...props}>
            {buttonText}
          </Button>
        </FormFooter>
      </form>
    </FormWrapper>
  );
};

FormComponent.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputContent: PropTypes.arrayOf(
    PropTypes.shape({
      inputType: PropTypes.string.isRequired,
      labelText: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
