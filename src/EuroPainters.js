import Video from "./videos/europainters.mp4";

function EuroPainters() {
 return (
  <div>
   {/* <header id="header" class="fixed-top header-inner-pages">
    <div class="container d-flex align-items-center justify-content-between">
     <nav id="navbar" class="navbar">
      <ul>
       <li>
        <a class="nav-link scrollto " href="#hero">
         Home
        </a>
       </li>
       <li>
        <a class="nav-link scrollto" href="#about">
         About
        </a>
       </li>
       <li>
        <a class="nav-link active  scrollto" href="#portfolio">
         Portfolio
        </a>
       </li>
       <li>
        <a class="nav-link  scrollto" href="#journal">
         Blog
        </a>
       </li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
     </nav>
    </div>
   </header> */}

   <main class="main">
    <div class="container">
     <div class="d-flex justify-content-between align-items-center">
      <h2>Portfolio Details</h2>
      <ol>
       <li>
        <a href="index.html">Home</a>
       </li>
       <li>
        <a href="portfolio.html">Portfolio</a>
       </li>
       <li>Portfolio Details</li>
      </ol>
     </div>
    </div>

    <div id="portfolio-details" class="portfolio-details">
     <div class="container">
      <div class="row">
       <div class="col-lg-8">
        <h2 class="portfolio-title">Euro Painters - Tradies CRM Website </h2>

        <div class="portfolio-details-slider swiper">
         <video src={Video} width="800" height="400" controls />
         <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide">
           <img src="./images/img1.png" alt="" />
          </div>
          <div class="swiper-slide">
           <img src="./images/img2.png" alt="" />
          </div>
         </div>
         <div class="swiper-pagination"></div>
        </div>
       </div>

       <div class="col-lg-4 portfolio-info">
        <h3>Project information</h3>
        <ul>
         <li>
          <strong>Type</strong>: Website Application
         </li>
         <li>
          <strong>Client</strong>: Euro Painters Ltd.
         </li>
         <li>
          <strong>Category</strong>: Tradies
         </li>
         <li>
          <strong>Project URL</strong>: <br />
          <a href="https://europainters.online">https://europainters.online</a>
          <br />
          <a href="https://europainterworkers.online">
           https://europainterworkers.online
          </a>
         </li>
        </ul>

        <p>
         A two-part website one for tradies admin which is a CRM system where
         they manages their jobs, job requests, current workers, tasks and
         vehicles along with assigning the correct workers to the jobs and
         tracking how many tasks are being completed to monitor the progress of
         the jobsite work.
        </p>
        <br />
        <p>
         The second part of the website is used by the tradies and actual
         workers to punch in and punch out and monitor the no of hours they are
         doing at the respective jobsites. It is also used to monitor what all
         jobsites, tasks and vehicles they have been assigned to so they know
         which site they have to go to work next.
        </p>
       </div>
      </div>
     </div>
    </div>
   </main>
  </div>
 );
}

export default EuroPainters;
