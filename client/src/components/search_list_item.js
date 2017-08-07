import React from 'react';

export default props => {
	return (
		<div className="col-xs-4" key={index}>
			<div className="card" style={{ width: '20rem' }}>
				<img
					className="card-img-top"
					src="https://dummyimage.com/318X180/b3b3b3/fff.png"
				/>
				<div className="card-block">
					<h6 className="card-title">
						Name: {list[key].name}
					</h6>
					<div className="card-text">
						<p>About Me:</p>
						<p>
							{this.charLimit(list[key].bio.aboutme)}
						</p>
						<p>
							Affiliates: {list[key].bio.affiliates}
						</p>
						<p>
							Serving Location: {list[key].bio.location}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
