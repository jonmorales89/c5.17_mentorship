import React from 'react';

export function renderInput(values) {
  const { type, meta: { touched, error }, label, input } = values;
  const hasError = touched && error;
  return (
    <div className={`form-group ${hasError ? 'has-danger' : ''}`}>
      <label>
        {label}
      </label>
      <input
        {...values.input}
        name={input.name}
        type={type ? `${type}` : 'text'}
        className={`form-control ${hasError ? 'form-control-danger' : ''}`}
      />
      <div className="form-control-feedback">
        {hasError ? error : ''}
      </div>
    </div>
  );
}

export function renderTextArea({ input, label, meta: { touched, error } }) {
  return (
    <div className="form-group my-1">
      <label>
        {label}
      </label>
      <textarea {...input} name={input.name} type="text" className="form-control mr-2 mb-2" />
      {
        <p className="form-text text-danger">
          {touched && error}
        </p>
      }
    </div>
  );
}
