function Forma(){
    return(

        <form className="row">
            <div className="col-md-6">
                <label for="inputFirstName" class="form-label">Ime</label>
                <input type="text" className="form-control" aria-label="First name" />
            </div>
            <div className="col-md-6">
                <label for="inputLastName" class="form-label">Prezime</label>
                <input type="text" className="form-control" aria-label="Last name" />
            </div>
            <div className="col-md-12">
                <label for="exampleFormControlInput1" className="form-label">E-mail adresa</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="col-md-12">
                <label for="exampleFormControlTextarea1" className="form-label">Komentar</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-md-12">
                 <button type="submit" className="btn btn-secondary btn-sm mt-3" >Prosledi</button>
            </div>
               
        </form>

    )
}

export default Forma