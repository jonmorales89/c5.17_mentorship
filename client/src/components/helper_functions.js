import React from 'react';

export function renderInput(values) {
	const { type, meta: { touched, error }, label, input } = values;
	const hasError = touched && error;
	return (
		<div className={`form-group ${hasError ? 'has-danger' : ''}`}>
			<label className="form-control-label">
				{label}
			</label>
			<input
				{...values.input}
				name={input.name}
				type={type ? type : 'text'}
				className={`form-control ${hasError ? 'form-control-danger' : ''}`}
			/>
			<div className="form-control-feedback">
				{hasError ? error : ''}
			</div>
		</div>
	);
}
