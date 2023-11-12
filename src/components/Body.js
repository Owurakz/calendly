import React from "react";

function Body() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 mt-4">
          <h1 className="h1 pb-3 head">
            The genius way to work <span className="ahead"> better</span>
          </h1>
          <p className="pb-3">
            Calendly makes it easier to work smarter when you're working solo.
            Meetings, sessions and appointments become more efficient ways to
            achieve success and accomplish goals.
          </p>
          <button type="button" className="btn btn-dark ml-5">
            Sign up for free
          </button>
        </div>
        <div className="col mt-3">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/46W8NE43rD54MveL20rPp5/e18c62fb5617db69691c4ec475005c06/Homepage-Hero-new.png?w=1366&h=1132&q=85&fm=webp"
            height="300px"
            width="75%"
            alt=""
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xl-1"></div>
        <div className="col mt-5 ml-5">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6XqS7MbsZB4a08zAUxOHde/033649d82a01b51bbc080b037aac0206/Calendly-Round-Robin.png?w=1140&h=931&q=85&fm=webp"
            alt=""
            height="300px"
          />
        </div>
        <div className="col mt-5 mr-5 pr-5">
          <p className="lead">A CURATED CALENDAR</p>
          <h3 className="h3 mb-3 head">BOOK UP EFFICIENTLY</h3>
          <p>
            {" "}
            When invitees select a meeting slot from your schedule, they only
            see the times you're available and only the lenght and type of
            meeting you want to have. Your schedule fills up efficiently, and
            everyone avoids excess email exchanges
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-xl-1"></div>
        <div className="col-xl-4">
          <p className="lead">AUTOMATED NOTIFICATIONS AND FOLLOW-UPS</p>
          <h3 className="h3 mb-3 head">
            {" "}
            Work like you have a personal assistant{" "}
          </h3>
          <p className="">
            Because Calendly automates administrative tasks like sending
            reminder emails and follow-ups, you can focus on the work that
            builds your business and brings customers back for more
          </p>
        </div>
        <div className="col">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&h=955&q=85&fm=webp"
            height="300px"
            width="75%"
            alt=""
          />
        </div>
      </div>
      <div className="edit">
        <div className="row mt-4">
          <div className="col-xl-4 pl-5 pt-5">
            <h2 className="h2 mb-5 pl-3 pt-5 head">
              Find just-right plans for individuals and small teams
            </h2>
            <p>
              {" "}
              <button type="button" className="btn btn-dark ml-5">
                See our plans
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
