import { Form } from '../Components/Form';
import { Partner } from '../Components/Partner';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import Image from 'next/image'
const AboutUs = () => {
    return (
        <>  <Header />
            	<div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
			<div className="breadcrumbs-inner">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1 className="page-title">About Us</h1>
							<ul>
								<li>
									<a className="active" href="index.php">Home</a>
								</li>
								<li>About Us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            </div>
            <Form />
            <div className="rs-history sec-spacer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 rs-vertical-bottom mobile-mb-50">
						<a href="/#">
							<Image src="images/about/history.jpg" width={540} height={333} alt="TOP Institute For Commerce in India " />
						</a>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="abt-title">
							<h2>About Kisalay Commerce Classes</h2>
						</div>
						<div className="about-desc">
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
            <div className="rs-mission sec-color sec-spacer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 mobile-mb-50">
						<div className="abt-title">
							<h2>Why Choose Us</h2>
						</div>
						<div className="about-desc">
							<p>we are the Best Institute for Commerce in India Contact us Now for the Service By opting
								for KCC to be the growing plant for your capabilities and aptitude, you would be
								stepping into a world of innovation. An institution that has made its name on
								demonstrable works, KCC offers you the ...........<a href="why-choose-us.php">Read
									More</a></p>

						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="row">
							<div className="col-md-6 mobile-mb-30">
								<a href="/#">
									<Image src="images/about/mission1.jpg" width={255} height={325}  alt="TOP Institute For Commerce in India " />
								</a>
							</div>
							<div className="col-md-6">
								<a href="#">
									<Image src="images/about/mission2.jpg" width={255} height={325} alt="TOP Institute For Commerce in India " />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
             <Partner/>
            <Footer />
         
            

        </>
    )
}

export default AboutUs;