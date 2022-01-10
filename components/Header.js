import { Navigation } from './Navigation'
import Link from 'next/link'
export const Header = () => {
    return (
        <>
            <div className="full-width-header">
                <div className="rs-toolbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="rs-toolbar-left">
                                    <div className="welcome-message">
                                        <i className="fa fa-bank"></i><span>Welcome to Kisalay Commerce Classes</span> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="rs-toolbar-right">
                                    <div className="toolbar-share-icon">
                                        <ul>
                                            <li><a href="https://www.facebook.com/kisalaycommerceclasses"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="https://twitter.com/kisalaycommerce"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/kisalay_commerce_classes/"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="https://www.youtube.com/channel/UCK9C1FkM9Zzw3ZkY13Yzwaw"><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="#" className="apply-btn">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Navigation />
        </div>  
        </>
    )
}
