import Product from './component/product';
import Pricing from './component/pricing';

export default function Cart(){
    
    return (
        <div className='shopping-bag-page bg-[#faf2ec]'>
            <div className='container'>
                <div className='main-content-wrapper border-t py-10'>
                    <div className='page-description'>
                        <div className='heading text-4xl leading-7 font-crimson text-[#3c2f27] pb-10'>
                            Items in your cart
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='col-span-9'>
                            <div className='right-section '>
                                <Product />
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='left-section sticky top-24'>
                                <div className='pricing'>
                                    <Pricing/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

