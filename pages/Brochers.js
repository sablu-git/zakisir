import { Form } from '../Components/Form';
import { Partner } from '../Components/Partner';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
const Brochers = () => {
    return (
        <>  <Header />
            	<div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
			<div class="breadcrumbs-inner">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<h1 class="page-title">About Us</h1>
							<ul>
								<li>
									<a class="active" href="index.php">Home</a>
								</li>
								<li>About Us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            </div>
            <Forms />
            <div class="rs-history sec-spacer">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-12 rs-vertical-bottom mobile-mb-50">
						<a href="/#">
							<img src="images/about/history.jpg" alt="TOP Institute For Commerce in India " />
						</a>
					</div>
					<div class="col-lg-6 col-md-12">
						<div class="abt-title">
							<h2>About Kisalay Commerce Classes</h2>
						</div>
						<div class="about-desc">
							<p> Kisalay Commerce Classes is Premier Institute for B.Com., I, II, III, M.Com., CA, CS,
								CMA(Foundation) and Intermediate. we are the Best Institute for Commerce in India
								Contact us Now for the Service It was established in the year 2012 by Kisalay Dwivedi &
								Team to guide young Commerce Students to achieve their career aspirations. Kisalay
								Commerce Classes Team comprises of Chartered Accountant, Accountant, Bank Employee,
								Graduates, Toppers who are masters of their subjects. Many students have taken admission
								in B.H.U. and other M.B.A. Colleges under the guidance of Kisalay Commerce Classes.
								Because we are one of the Best Institute for Commerce in India.</p>

							<p>Today's global business environment looks for professionals who can work on diverse
								platforms that are cross-functional and even cross-cultural. It is the role of a strong
								education system to ensure the multifaceted development of young minds and create
								all-rounders.we are here because we are one of the Best Institute For Commerce in India.
							</p>
						</div>
					</div>
				</div>
			</div>
            </div>
            <div class="rs-mission sec-color sec-spacer">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-12 mobile-mb-50">
						<div class="abt-title">
							<h2>Why Choose Us</h2>
						</div>
						<div class="about-desc">
							<p>we are the Best Institute for Commerce in India Contact us Now for the Service By opting
								for KCC to be the growing plant for your capabilities and aptitude, you would be
								stepping into a world of innovation. An institution that has made its name on
								demonstrable works, KCC offers you the ...........<a href="why-choose-us.php">Read
									More</a></p>

						</div>
					</div>
					<div class="col-lg-6 col-md-12">
						<div class="row">
							<div class="col-md-6 mobile-mb-30">
								<a href="/#">
									<img src="images/about/mission1.jpg" alt="TOP Institute For Commerce in India " />
								</a>
							</div>
							<div class="col-md-6">
								<a href="/#">
									<img src="images/about/mission2.jpg" alt="TOP Institute For Commerce in India " />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
             <Partner/>
            <Footer />
         
            {/* <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true" class="fa fa-close"></span>
			</button>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="search-block clearfix">
						<form>
							<div class="form-group">
								<input class="form-control" placeholder="eg: Computer Technology" type="text" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div> */}

        </>
    )
}
export default Brochers;