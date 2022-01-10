import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Kisalay Commerce Classes is one of the India’s best commerce onlinecoaching institute for B.com, CA Foundation, CS-CSEET, CMA ClassesPrayagraj. Contact us @ Mo. 9451506506, 9889980595." />
            <meta name="google-site-verification" content="WMKwRuzOYOfGb_3j0cBO5_T3r-m0Hi7Jed1B2G6xgPU" />
            <title>India’s Best Commerce Online Coaching Institute for B.com, CA Foundation, CS-CSEET, CMA Classes Prayagraj.</title>
            <link rel="canonical" href="https://kisalaycommerceclasses.com" />
            <link rel="canonical" href="https://www.kisalaycommerceclasses.com" />
            <link rel="apple-touch-icon" href="apple-touch-icon.html" />
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
            <link rel="stylesheet" type="text/css" href="css/animate.css" />
            <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
            <link rel="stylesheet" type="text/css" href="css/slick.css" />
            <link rel="stylesheet" type="text/css" href="css/rsmenu-main.css" />
            <link rel="stylesheet" type="text/css" href="css/rsmenu-transitions.css" />
            <link rel="stylesheet" type="text/css" href="css/magnific-popup.css" />
            <link rel="stylesheet" type="text/css" href="fonts/flaticon.css" />
            <link rel="stylesheet" type="text/css" href="fonts/fonts2/flaticon.css" />
            <link rel="stylesheet" type="text/css" href="style.css" />
            <link rel="stylesheet" type="text/css" href="css/responsive.css" />
            <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
            <link rel="icon" href="images/favicon.png" type="image/x-icon" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-GW5DNLBM06"></script>
            <style jsx>
                {`
                    .btn {
                        background-color: DodgerBlue;
                        border: none;
                        color: white;
                        padding: 12px 30px;
                        cursor: pointer;
                        font-size: 20px;
                    } 
                    .btn:hover {
                        background-color: #00cccc;
                    }     
                `}    
            </style>
            <link rel="stylesheet" href="css/custom.css" />
            <link rel="stylesheet" href="css/aos.css" /> 
            <style jsx>
                {`
                    .float {
                        position: fixed;
                        bottom: 75px;
                        right: 20px;
                        color: #FFF;
                        border-radius: 50px;
                        text-align: center;
                        font-size: 30px;
                        z-index: 100;
                      }
                      .my-float {
                        margin-top: 16px;
                      }
                      .floatt {
                        position: fixed;
                        width: 100px;
                        height: 60px;
                        bottom: 75px;
                        left: 20px;
                        color: #FFF;
                        border-radius: 50px;
                        text-align: center;
                        font-size: 30px;
                        z-index: 100;
                      }
                      #cookieConsent {
                        background-color: #00cccc;
                        min-height: 26px;
                        font-size: 14px;
                        color: black;
                        line-height: 26px;
                        padding: 8px 0 8px 30px;
                        font-family: "Trebuchet MS", Helvetica, sans-serif;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: none;
                        z-index: 9999;
                      }
                      #cookieConsent a {
                        color: #4B8EE7;
                        text-decoration: none;
                      }
                      #closeCookieConsent {
                        float: right;
                        display: inline-block;
                        cursor: pointer;
                        height: 30px;
                        width: 30px;
                        margin: -15px 0 0 0;
                        font-weight: bold;
                      }
                      #closeCookieConsent:hover {
                        color: #FFF;
                      }
                      #cookieConsent a.cookieConsentOK {
                        background-color: #F1D600;
                        color: #000;
                        display: inline-block;
                        border-radius: 5px;
                        padding: 0 20px;
                        cursor: pointer;
                        margin: 0 60px 0 30px;
                      }
                      #cookieConsent a.cookieConsentOK:hover {
                        background-color: #E0C91F;
                      }
                      .checked {
                        color: orange;
                      }    
                `}    
            </style>
        <Head />
        <body>
          <Main />
          <NextScript />
            <script data-cfasync="false" src="https://www.kisalaycommerceclasses.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
            <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
            <script src="js/modernizr-2.8.3.min.js"></script>
            <script src="js/jquery.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/slick.min.js"></script>
            <script src="js/isotope.pkgd.min.js"></script>
            <script src="js/imagesloaded.pkgd.min.js"></script>
            <script src="js/wow.min.js"></script>
            <script src="js/waypoints.min.js"></script>
            <script src="js/jquery.counterup.min.js"></script>
            <script src="js/jquery.magnific-popup.min.js"></script>
            <script src="js/rsmenu-main.js"></script>
            <script src="js/plugins.js"></script>
            <script src="js/main.js"></script>
            <script type="text/javascript" src="js/aos.js"></script>            
        </body>
      </Html>
    )
  }
}

export default MyDocument