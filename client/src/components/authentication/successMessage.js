import React from 'react';

export default props => {
	if (props.success) {
		return (
			<div className="form-group has-success">
				<div className="form-control-feedback text-center">
					Success! Thank you for your participation!
				</div>
			</div>
		);
	} else {
		return <div />;
	}
};
