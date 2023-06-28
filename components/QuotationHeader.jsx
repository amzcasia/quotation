export default function QuotationHeader(className){
    return(
        <div className="hidden grid-cols-12 py-10 text-lg print:grid print:grid-cols-6">
            <div className="flex items-center justify-between col-span-6">
                <div>
                    <img className="max-h-[100px]" src="../assets/brand-logo.png" alt="" />
                </div>
                <div>
                    <div className="text-right">
                        <p>Billing Period</p>
                        <p>July 4-7, 2023</p>
                    </div>
                </div>
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-6 pt-2">
                <span>0409 Bantol St., Dampas District, Tagbilaran City, Bohol</span>
            </div>
            <div className="col-span-6"></div>
            <div className="flex justify-center w-full col-span-6 mt-2 border-black border-y-2">
                <span className="">Room Accommodation ● Function Room ● Tour Assistance</span>
            </div>
        </div>
    )
}