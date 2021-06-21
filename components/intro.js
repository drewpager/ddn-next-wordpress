import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        The Daily Dose.
      </h1>
      <div className="mt-5 md:pl-8">
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        <form className="w-full max-w-sm" action="https://app.convertkit.com/forms/1593944/subscriptions" method="post" data-sv-form="1593944" data-uid="29e57523df" data-version="5">
          <div className="flex items-center border-b border-accent-ddn py-2">
            <input className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="winston@churchill.com" aria-label="Full name" />
            <button className="flex-shrink-0 bg-accent-ddn hover:bg-black border-accent-ddn hover:border-black text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => Email()}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

// Function to submit email address to ConvertKit

function Email() {
  console.log("From the email function!");

}

// 1. form validation + send email through to ConvertKit

// 2. Alert/Show success status + clear form

