function FarmerDashbord(){
    return(
        <>
        <h3>
            Welcome farmer this is your online extension service
        </h3>
        <div>
        <p>Choose a crop you want to plant</p>
        <select>
            <option>Potatoes</option>
            <option>Beans</option>
            <option>Peas</option>
            <option>Maize</option>
            <option>Dairy</option>
        </select>
        </div>
        <div>
            <p>Requirment for planting the crop choosen</p>
            <h1>Display all requirment</h1>
        </div>
        <div>
            <button>Start planting</button>
            <p>Once a farmer click on start it will now count days for the crop 
                and give farmer notification for sparying ,and give option for uploading image for crops for advice
            </p>
        </div>
        <div><button>Shop quality seeds and other requirement</button></div>
        <div>
            <h1>Market prices</h1>
            <h2>Real time Market prices for the planted crop from nearby markets </h2>
        </div>
        </>
    )
}
export default FarmerDashbord;