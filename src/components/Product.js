
import React from 'react'
import ProductPage from './ProductPage'


function Product() {


    return (
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 ">
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='112321341'
                image="https://m.media-amazon.com/images/I/71vv21EV0sS._AC_UL320_.jpg"
                title='Soulaca 22 inches Smart Mirror for Bathroom Touch Screen LED TV Android WiFi Bluetooth ATSC Hotel Television'
                rating={4}
                price={69022}
            />
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='49538094'
                image="https://m.media-amazon.com/images/I/51usibpi5VL._AC_UL320_.jpg"
                title="Sceptre UTV 50'' Class 4K LED TV 3840x2160 U508CV-UMC 4X HDMI Ports, Metal Black"
                rating={3}
                price={80622}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='4903850'
                image="https://m.media-amazon.com/images/I/81FFbVCndmS._AC_UL320_.jpg"
                title="Samsung 27-Inch Class Monitor M5 Series - FHD Smart Monitor and Streaming TV (LS27AM501NNXZA, 2021 Model)"
                rating={4}
                price={35520}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='223445930'
                image="https://m.media-amazon.com/images/I/91rBZ+LaozS._AC_UL320_.jpg"
                title="LG 86NANO75UPA Alexa Built-in NanoCell 75 Series 86'' 4K Smart UHD NanoCell TV (2021)"
                rating={4}
                price={172864}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='3254354345'
                image="https://m.media-amazon.com/images/I/81MrAzQYTGL._AC_UL320_.jpg"
                title="Velvet by Graham & Spencer Women's Gauzy Whisper Classics Tee"
                rating={5}
                price={2500}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='0829332'
                image="https://m.media-amazon.com/images/I/81X2sms587L._AC_UL320_.jpg"
                title="Hanes Women's Stretch Cotton Raglan Sleeve Tee"
                rating={5}
                price={2000}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='10829432'
                image="https://m.media-amazon.com/images/I/91RcMHEwFuL._AC_UL320_.jpg"
                title="Chic Home Zarah 10 Piece Comforter Bedding with Sheet Set and Decorative Pillows Shams, Queen, Grey"
                rating={5}
                price={5800}
            /></div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <ProductPage
                id='0929332'
                image="https://m.media-amazon.com/images/I/71y5emCyuJL._AC_UL320_.jpg"
                title="ARL HOME Tropical Bedding Rainforest Duvet Cover Twin Size Green Plant Palm Leaves Quilt Cover 2PC Forest Botanical Leaf Duvet"
                rating={5}
                price={7200}
            /></div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <ProductPage
                id='108293327'
                image="https://images-na.ssl-images-amazon.com/images/I/51KZJOBw56L.jpg"
                title="Band-Aid Brand Flexible Fabric Adhesive Bandages for Wound Care and First Aid, All One Size, 100 Count
                by<br/> Band-Aid"
                rating={3}
                price={500}
            />
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <ProductPage
                id='0829333'
                image="https://images-na.ssl-images-amazon.com/images/I/4140JEDX5KS.jpg"
                title="Boob Tape and 2 Pcs Petal Backless Nipple Cover Set, Breathable Breast Lift Tape Athletic Tape with Silicone Breast Petals Reusable Adhesive Bra for A-E Cup Large Breast… <br/>
                by OKELA"
                rating={4}
                price={1500}
            />
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <ProductPage
                id='01829332'
                image="https://images-na.ssl-images-amazon.com/images/I/41cvrik0p3L.jpg"
                title="Odoland Portable LED Camping Lantern with Ceiling Fan - Hurricane Emergency Survival Kit <br/>
                by Odoland"
                rating={5}
                price={5200}
            />
            </div>
        </div>
        
        
    )
}

export default Product
