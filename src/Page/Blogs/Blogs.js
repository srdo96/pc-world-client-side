import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="bg-lightblue py-20 px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            My Awesome Blogs
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Difference between Javascript and Nodejs?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Javascript is a programming language for web browser. It is
                mainly used for client-side.Javascript can only run in web
                browser. <br />
                On the other hand, Nodejs is a Javascript runtime environment.
                It is mainly used for server-side. Javascript can run outside of
                the browser with the help of nodejs.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                When should you use nodejs and when should you use mongodb?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Nodejs is a Javascript runtime environment. It's run on V8
                engine and execute Javascript code outside a web browser. For a
                small or medium level project it very useful. <br />
                Mongodb is a NoSQL database system. It is document-oriented. It
                has flexible data model. For small or medium project it is very
                useful.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Differences between SQL and NoSQL databases?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                <span className="font-semibold">SQL: </span>It is a relational
                database management system. It is best for complex queries. It
                is vertically scalable. <br />
                <span className="font-semibold">NoSQL: </span>It is
                non-relational database. It is best for hierarchical data
                storage. Horizontally scalable.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What is the purpose of JWT and how does it work?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                JWT or JSON Web Token. It is mainly used for authentication.
                When user login to an application. It will create a JWT. And
                send it back to the user. JWT tells the server what routes,
                services, and resources the user is allowed to access.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
