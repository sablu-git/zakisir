import Image from "next/image"
export const Slider = () => {
    return (
        <>
            <div id="rs-slider" class="slider-overlay-1">
                <div id="home-slider">
                    <div class="item active">
                    <a href="https://play.google.com/store/apps/details?id=co.shield.avhog" target="_blank">
                        <Image src="https://img.kisalaycommerceclasses.com/images/file_1637683248270.jpg" width={1520} height={640} alt="KCC App Slider" alt="Best coaching for class 11 in Allahabad " />
                    </a>
                    </div>
                    <div class="item ">
                    <Image src="https://img.kisalaycommerceclasses.com/images/file_1637683319583.jpg" width={1520} height={640} alt="KCC Slider One" alt="Best coaching for class 11 in Allahabad " />
                    </div>
                    <div class="item">
                    <Image src="https://img.kisalaycommerceclasses.com/images/file_1637683362172.jpg" width={1520} height={640} alt="KCC Slider Two " alt="Best coaching for class 11 in Allahabad " />
                    </div>
                    <div class="item">
                    <Image src="https://img.kisalaycommerceclasses.com/images/file_1637683132943.jpg" width={1520} height={640} alt="KCC Slider Four" alt="Best coaching for class 11 in Allahabad " />
                    </div>
                </div>
            </div>
		</>
    )
}
