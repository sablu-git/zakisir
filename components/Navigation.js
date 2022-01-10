import Link from 'next/link'
import Image from 'next/image'
export const Navigation = () => {
    return (
        <>
            <header id="rs-header" className="rs-header">
                <div className="rs-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="logo-area">
                                    <Link href="/">
                                        <a>
                                            <Image src="/file_1637949987494.png" width={350} height={54} alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="header-contact">
                                            <div id="phone-details" className="widget-text">
                                                <i className="glyph-icon flaticon-phone-call"></i>
                                                <div className="info-text">
                                                    <Link href="tel:9451506506">
                                                        <a>
                                                            <span>Call Us</span>
                                                            +91-9451506506
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="header-contact">
                                            <div id="info-details" className="widget-text">
                                                <i className="glyph-icon flaticon-email"></i>
                                                <div className="info-text">
                                                    <Link href="mailto:kisalaycommerceclasses@gmail.com">
                                                        <a>
                                                            <span>Mail Us</span>
                                                            kisalaycommerceclasses@gmail.com 
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>				
                    </div>
                </div>
                <div className="menu-area menu-sticky">
                    <div className="container">
                        <div className="main-menu">
                            <div className="row">
                                <div className="col-sm-12">
                                    <a className="rs-menu-toggle"><i className="fa fa-bars"></i>Menu</a>
                                    <nav className="rs-menu">
                                        <ul className="nav-menu">
                                            <li>
                                                <Link href="/" className="current-menu-item current_page_item"><a>Home</a></Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a>About Us</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/about-us" >
                                                            <a>About Us</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/director-message.php">
                                                            <a>Director's Message</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/why-choose-us.php">
                                                            <a>Why KCC</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/our-vision.php"><a>Our Vision</a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/testimonials.php">
                                                            <a>Success Stories</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"> 
                                                <a>Courses</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/11th-12th-Commerce-classNamees.php"><a>11th & 12th Commerce</a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/11th-12th-foundation-course-details.php"><a>11th & 12th (Foundation)</a></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/b-com-course-details.php"><a>B.Com</a></Link>
                                                    </li>
                                                    <li><Link href="m-com-course-details.php"><a>M.Com</a></Link></li>                                                          
                                                    <li><Link href="ca-course-details.php"><a>CA</a></Link></li>
                                                    <li><Link href="cs-course-details.php"><a>CS</a></Link></li>
                                                    <li><Link href="cma-course-details.php"><a>CMA</a></Link></li>
                                                </ul>
                                            </li>
                                            <li className="rs-mega-menu mega-rs">
                                                <a>Selection</a>
                                                <ul className="mega-menu">
                                                    <li className="mega-menu-container">
                                                        <div className="mega-menu-innner">
                                                            <div className="single-magemenu">
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <Link href="selection-yearly.php?id=2015"><a>2015</a></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="selection-yearly.php?id=2016"><a>2016</a></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="single-magemenu">
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <Link href="selection-yearly.php?id=2017"><a>2017</a></Link>
                                                                    </li>
                                                                    <li><Link href="selection-yearly.php?id=2018"><a>2018</a></Link></li>
        
                                                                </ul>
                                                            </div>
                                                            <div className="single-magemenu">
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <Link href="selection-yearly.php?id=2019"><a>2019</a></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="selection-yearly.php?id=2020"><a>2020</a></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="single-magemenu">
                                                                <ul className="sub-menu">
                                                                    <li><Link href="selection-yearly.php?id=2020"><a>2021</a></Link></li>
                                                                    <li><Link href="selection-yearly.php?id=2020"><a>2022</a></Link></li>
                                                                </ul>
                                                            </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                               
                                                    <li><a>Our Brochure</a></li>
                                                    <li><Link href="download.php"><a>Downloads</a></Link></li>
                                                    <li><Link href="contact-us.php"><a>Contact Us</a></Link></li>
                                                </ul>
                                            </nav>	
                                            <Link className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="/#"><i className="fa fa-search"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </header>
        </>
    )
}
