// next components
import Image from 'next/image'

// images and icons
import TurkeyCircusStripe from 'assets/images/turkey-circus-stripe.png'

const JoinCommunity = () => {
  return (
    <section className="sm:bg-hero-bottom">
      <div className="relative z-[2] mt-[-72px] px-4 pt-0 md:px-8 lg:mt-0">
        <div className="mx-auto w-full max-w-[1560px] bg-cover px-2 pb-5 text-center md:rounded-[72px] md:px-5 md:pb-32">
          <div className="flex w-full justify-center pt-0 lg:pt-48">
            <div className="h-[153px] w-[153px] lg:h-[275px] lg:w-[275px]">
              <Image src={TurkeyCircusStripe} alt="" />
            </div>
          </div>
          <h2 className="mb-4 mt-[27px] text-[22px] font-semibold text-light-300 sm:mb-7 md:mb-14 lg:mt-[35px] lg:text-[40px] lg:font-extrabold">
            Join Community
          </h2>
          <p className="sm:text-md mx-auto mb-5 w-full max-w-[927px] text-sm leading-6 sm:leading-9 md:mb-24 lg:text-[22px]">
            We are creating a community composed of digital creators,
            programmers, philanthropists and creative innovators. Join the
            discord to cultivate connection.
          </p>
          <a
            href="https://discord.gg/fostermarketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex w-fit items-center justify-center gap-5 rounded-xl bg-btn px-12 py-[12px] text-center font-secondary text-[30px] leading-none tracking-wide text-[#95DBD5] hover:shadow-lg hover:shadow-[#95DBD5] md:text-[35px]"
          >
            Discord
            <svg
              id="foster_logo_wallet"
              data-name="foster logo wallet"
              xmlns="http://www.w3.org/2000/svg"
              width="19.582"
              height="22.508"
              viewBox="0 0 19.582 22.508"
            >
              <path
                id="Union_5"
                data-name="Union 5"
                d="M7.767,21.352a.363.363,0,0,1,.454-.375,12.265,12.265,0,0,1,1.635.479c.8.35.955.45.867.663s-.462.372-1.123.387H9.5C8.037,22.508,7.767,21.7,7.767,21.352Zm2.719.2-1.467-.5c-.9-.31,1.255-.184,1.636-.158s.368.29.276.53a.262.262,0,0,1-.27.155A.664.664,0,0,1,10.486,21.553ZM7.308,20c0-.343.9-.62,2.007-.62s2.007.277,2.007.62-.9.62-2.007.62S7.308,20.338,7.308,20Zm4.113-.349a2,2,0,0,0-.87-.471A4.434,4.434,0,0,0,9.3,19.006a4.072,4.072,0,0,0-1.6.293,1.632,1.632,0,0,0-.528.347.872.872,0,0,0-.137.187,2.58,2.58,0,0,1-.154-.355,3.181,3.181,0,0,1-.2-1.194c0-.674,1.172-1.216,2.616-1.216s2.617.544,2.619,1.218a3.181,3.181,0,0,1-.2,1.2,2.5,2.5,0,0,1-.153.355A.918.918,0,0,0,11.421,19.647ZM.469,7.288C1.86,12.2,5.295,16.056,6.455,17.63a1.114,1.114,0,0,0-.207.572C-2.443,11.823.469,7.288.469,7.288Zm11.744,10.46c1.533-1.823,5.312-6.67,5.591-10.46,0,0,3.875,4.818-5.486,10.738A1.08,1.08,0,0,0,12.213,17.748Zm-.9-.748c.99-1.981,4.078-8.652,3.582-13.873a4.039,4.039,0,0,1,2.31,4.4c-.684,3.84-3.277,7.037-5.224,9.919A2.231,2.231,0,0,0,11.317,17ZM1.115,6.112c-.161-2.374,2.323-4.1,3.333-4.188,0,0-1.7,3.914,3.1,14.968a2.728,2.728,0,0,0-.816.439C5.452,15.685,1.387,10.185,1.115,6.112Zm8.893,10.542c.281-2.536,1.192-11.451.75-16.1A3.259,3.259,0,0,1,14.15,3.624c.309,3.637-1.316,9.063-3.3,13.2A5.065,5.065,0,0,0,10.008,16.653ZM5.355,1.693C5.944.17,9.8-1.117,10.05,1.518,10.288,4,9.844,12.991,9.6,16.617c-.1-.008-.2-.008-.308-.008a5.6,5.6,0,0,0-1.354.162C6.991,14.5,3.691,6,5.355,1.693Z"
                transform="translate(0)"
                fill="#95dbd5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity
