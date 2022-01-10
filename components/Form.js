export const Form = () => {
    return (
        <>
            <div className="rs-search-courses">
			<div className="container">
				<form method="post" action="" className="row search-form">
					<div className="col-md-2">

						<div className="keyword">
							<input type="text" name="name" placeholder="Enter your Name"
								pattern="[a-zA-Z]+([\s][a-zA-Z]+)*" title="Alphabates and space in between only"
								required/>

						</div>

					</div>
					<div className="col-md-2">
						<div className="categories">
							<select id="course" name="course" required="required">
								<option value="">Select Course</option>
							
							</select>
						</div>
					</div>
					<div className="col-md-2">
						<div className="categories">
							<select name="state" required="required">

								<option value="">Select State</option>
								<option value="ANDAMAN &amp; NICOBAR">ANDAMAN &amp; NICOBAR</option>
								<option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
								<option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
								<option value="ASSAM">ASSAM</option>
								<option value="BIHAR">BIHAR</option>
								<option value="CHANDIGARH">CHANDIGARH</option>
								<option value="CHATTISGARH">CHATTISGARH</option>
								<option value="DADRA &amp; NAGAR">DADRA &amp; NAGAR</option>
								<option value="DAMAN &amp; DIU">DAMAN &amp; DIU</option>
								<option value="DELHI">DELHI</option>
								<option value="GOA">GOA</option>
								<option value="GUJRAT">GUJRAT</option>
								<option value="HARYANA">HARYANA</option>
								<option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
								<option value="JAMMU &amp; KASHMIR">JAMMU &amp; KASHMIR</option>
								<option value="JHARKHAND">JHARKHAND</option>
								<option value="KARNATAKA">KARNATAKA</option>
								<option value="KERALA">KERALA</option>
								<option value="LAKSHDWEEP">LAKSHDWEEP</option>
								<option value="MADHYA PRADESH">MADHYA PRADESH</option>
								<option value="MAHARASHTRA">MAHARASHTRA</option>
								<option value="MANIPUR">MANIPUR</option>
								<option value="MEGHALAYA">MEGHALAYA</option>
								<option value="MIZORAM">MIZORAM</option>
								<option value="NAGALAND">NAGALAND</option>
								<option value="ORISSA">ORISSA</option>
								<option value="PONDICHERY">PONDICHERY</option>
								<option value="PUNJAB">PUNJAB</option>
								<option value="RAJASTHAN">RAJASTHAN</option>
								<option value="SIKKIM">SIKKIM</option>
								<option value="TAMIL NADU">TAMIL NADU</option>
								<option value="TRIPURA">TRIPURA</option>
								<option value="UTTAR PRADESH">UTTAR PRADESH</option>
								<option value="UTTARANCHAL">UTTARANCHAL</option>
								<option value="WEST BENGAL">WEST BENGAL</option>
							</select>
						</div>
					</div>
					<div className="col-md-2">
						<div className="keyword">
							<input type="text" pattern="[6-9]{1}[0-9]{9}"
								title="Phone number with 6-9 and remaing 9 digit with 0-9"
								data-msg="Please phone number." name="mobile" placeholder="Enter your phone number"
								aria-required="true" minlength="10" id="mobile"/>
						</div>
					</div>
					<div className="col-md-2">
						<div className="keyword">
							<input type="email" name="email" placeholder="Email" required/>
						</div>
					</div>

					<div className="col-md-2">
						<div className="search-btn">
							<button type="submit" name="submit">Send Query</button>
						</div>
					</div>
				</form>
			</div>
		</div>   
        </>
    )
}
