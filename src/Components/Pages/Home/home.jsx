import homeCSS from  './home.module.css'

const Home = () => {
    return (
       <div className={homeCSS.container}>
        <div className={homeCSS.posterWrapper}>
          <div className={homeCSS.textInfo}>
            <h2 className={homeCSS.h2}>Welcome to the original club</h2>
            <p>Free-thinkers, culture-makers and<br />originators - welcome to Club Originals.</p>
          </div>
        </div>
        <div className={homeCSS.popularNow}>
            <div className={homeCSS.popularNowInfo}>
                <h3 className={homeCSS.h3}>popular right now</h3>
                <div className={homeCSS.row}>
                    <button className={homeCSS.btn}>Hoodies</button>
                    <button className={homeCSS.btn}>Joggers</button>
                    <button className={homeCSS.btn}>Vests</button>
                    <button className={homeCSS.btn}>Shirts</button>
                </div>
            </div>
        </div>
        <div className={homeCSS.popularOptions}>
            <h3>who are you shopping for?</h3>
            <div className={homeCSS.Options}>
                <div className={homeCSS.Card}>
                    <div className={homeCSS.button}>
                        <button className={homeCSS.btn2}>MEN <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg></button>
                    </div>
                </div>
                <div className={homeCSS.Card2}>
                <div className={homeCSS.button}>
                        <button className={homeCSS.btn2}>WOMEN <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg></button>
                    </div>
                </div>
                <div className={homeCSS.Card3}>
                <div className={homeCSS.button}>
                        <button className={homeCSS.btn2}>KIDS</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={homeCSS.footer}>
            <div className={homeCSS.row} style={{backgroundColor:'black'}}>
            <div class="container p-4 pb-0">
                <form action="">
                <div class="row">
                    <div class="col-auto">
                    <p class="pt-2">
                        <strong>Sign up for our newsletter</strong>
                    </p>
                    </div>

                    <div class="col-md-5 col-12">
                    <div data-mdb-input-init class="form-outline">
                        <input type="email" id="form5Example22" class="form-control" />
                        <label class="form-label" style={{color:'white'}} for="form5Example22">Email address</label>
                    </div>
                    </div>
                    <div class="col-auto">
                    <button data-mdb-ripple-init type="button" class="btn btn-outline-light">
                        Subscribe
                    </button>
                    </div>
                </div>
                </form>
            </div>

            <div class="text-center p-3" style={{color:'white'}}>
                © 2024 Copyright:
                <a class="text-body" style={{textDecoration:'none'}} href="https://adidas.com/"> <span style={{color:'white'}}>adidas.com</span></a>
            </div>
                        </div>
                    </div>
       </div>
       
       
    )
}
export default Home