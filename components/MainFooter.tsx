import Image from 'next/image'
import EllipseGreen from '../assets/icons/ellipse-green.svg'

const MainFooter = () => {
  return (
    <div className="footer">
      <footer className="bg-dark-200 relative z-0 mt-24 overflow-hidden py-[70px] px-4 md:mt-32 md:px-7">
        <div className="absolute -top-[300px] -left-[400px] z-0 opacity-40">
          <Image
            src={EllipseGreen}
            alt=""
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
        <div className="absolute -bottom-[300px] -right-[400px] z-0 opacity-40">
          <Image
            src={EllipseGreen}
            alt=""
            width={1000}
            height={1000}
            objectFit="cover"
          />
        </div>
        <div className="mx-auto mb-16 grid w-full max-w-[1550px] grid-cols-2 justify-between gap-x-6 gap-y-10 md:mb-28 lg:flex">
          <div className="col-span-full lg:col-span-1">
            <a href="https://www.fostermarketplace.io/">
              <img
                src="/images/Foster_Marketplace_Enhanced_Logo.png"
                alt="logo"
                className="mx-auto block h-auto w-44 object-contain"
              />
            </a>
          </div>
          <div className="z-10 pl-6 md:pl-0">
            <h5 className="mb-7 pb-0.5 text-lg font-bold text-[#EFF0F6] md:text-2xl">
              Foster House
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.fostermarketplace.io/"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://turkeycircus.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Turkey Circus
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/fostermarketplace"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 pr-6 md:pr-0">
            <h5 className="mb-7 pb-0.5 text-lg font-bold text-[#EFF0F6] md:text-2xl">
              Resources
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://indd.adobe.com/view/a323ff9d-9b79-45ed-9f33-45ee566e9603"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://xd.adobe.com/view/8fbee6ad-e2c2-4951-b51f-8f06a227815a-daed"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Brand &amp; Design
                </a>
              </li>

              <li>
                <a
                  href="mailto:admin@fostermarketplace.io"
                  className="hover:text-brand-default text-xs font-bold text-[#EFF0F6]/80 hover:underline sm:text-sm lg:text-lg"
                >
                  Media Inquiries
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full lg:col-span-1">
            <h5 className="mb-7 pb-0.5 text-center text-lg font-bold text-[#EFF0F6] md:text-2xl lg:text-left">
              Stay Connected
            </h5>

            <ul className=" mx-auto flex w-full max-w-[600px] items-center justify-between gap-6">
              <li className="z-10">
                <a
                  href="https://www.instagram.com/fostermarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#202427] transition-all md:h-[46px] md:w-[46px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1=".5"
                        x2=".5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#95DBD5" />
                        <stop offset="1" stopColor="#95DBD5" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43 4.94 4.94 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.78 4.78 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.78 4.78 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.19 3.19 0 0 1-1.15.75 5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3 3.27 3.27 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.06 3.06 0 0 1 .75 1.1 5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87a5.12 5.12 0 1 0 3.637 1.5A5.13 5.13 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33Z"
                      transform="translate(-2 -2)"
                      fill="url(#a)"
                    />
                  </svg>
                </a>
              </li>
              <li className="z-10">
                <a
                  href="https://discord.gg/fostermarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#202427] transition-all md:h-[46px] md:w-[46px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="21.62"
                    viewBox="0 0 30 21.62"
                  >
                    <path
                      d="M26.48,5.282A12.271,12.271,0,0,0,19.274,2.6l-.335.335a17.877,17.877,0,0,1,6.369,3.352A20.878,20.878,0,0,0,17.6,3.773a26.906,26.906,0,0,0-5.2,0h-.5A23.529,23.529,0,0,0,6.034,5.449a9.139,9.139,0,0,1-1.676.67,16.867,16.867,0,0,1,6.7-3.352L10.894,2.6A11.26,11.26,0,0,0,3.687,5.282,32.727,32.727,0,0,0,0,20.2,9.688,9.688,0,0,0,7.877,24.22s1.006-1.173,1.676-2.179a8.384,8.384,0,0,1-4.525-3.017c.168.168.5.335.67.5h.168l.168.168a8.982,8.982,0,0,0,1.844.838,26.054,26.054,0,0,0,3.855,1.341,22.472,22.472,0,0,0,6.7,0A13.547,13.547,0,0,0,22.123,20.7a12.69,12.69,0,0,0,3.017-1.508,7.941,7.941,0,0,1-4.693,3.017l1.676,2.011A9.26,9.26,0,0,0,30,20.2,32.575,32.575,0,0,0,26.48,5.282ZM10.223,17.851a2.854,2.854,0,0,1,0-5.7h.168a2.615,2.615,0,0,1,2.514,2.682V15a2.908,2.908,0,0,1-2.682,2.849Zm9.553,0A2.793,2.793,0,0,1,17.095,15a2.659,2.659,0,0,1,2.514-2.849A2.793,2.793,0,0,1,22.291,15,2.763,2.763,0,0,1,19.777,17.851Z"
                      transform="translate(0 -2.6)"
                      fill="url(#a)"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="z-10">
                <a
                  href="https://twitter.com/circus_dao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-social-twitter flex h-10 w-10 items-center justify-center rounded-xl bg-[#202427] text-[#deefd0] transition-all md:h-[46px] md:w-[46px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.007"
                    height="18.721"
                    viewBox="0 0 22.007 18.721"
                  >
                    <path
                      d="M22.991,3.95a1,1,0,0,0-1.511-.859,7.48,7.48,0,0,1-1.873.793,5.152,5.152,0,0,0-3.374-1.242A5.232,5.232,0,0,0,11.01,7.705,11.032,11.032,0,0,1,4.2,3.781a1.012,1.012,0,0,0-.857-.365,1,1,0,0,0-.785.5,5.276,5.276,0,0,0-.242,4.769l0,0a1.041,1.041,0,0,0-.5.889,3.042,3.042,0,0,0,.026.439,5.185,5.185,0,0,0,1.568,3.313,1,1,0,0,0-.066.77,5.2,5.2,0,0,0,2.362,2.922,7.465,7.465,0,0,1-3.59.448A1,1,0,0,0,1.45,19.3a12.943,12.943,0,0,0,7.01,2.062A12.788,12.788,0,0,0,20.925,12a12.822,12.822,0,0,0,.535-3.646c0-.065,0-.133,0-.2a5.77,5.77,0,0,0,1.532-4.2ZM19.685,7.162a1,1,0,0,0-.233.7c.01.165.009.331.009.487a10.824,10.824,0,0,1-.454,3.081A10.685,10.685,0,0,1,8.46,19.361a10.938,10.938,0,0,1-2.551-.3A9.479,9.479,0,0,0,8.852,17.5a1,1,0,0,0-.6-1.786,3.208,3.208,0,0,1-2.214-.935q.224-.042.445-.105a1,1,0,0,0-.08-1.943A3.2,3.2,0,0,1,4.151,11a5.3,5.3,0,0,0,.545.046,1.021,1.021,0,0,0,.983-.7,1,1,0,0,0-.4-1.137A3.2,3.2,0,0,1,3.855,6.542c0-.066,0-.133.006-.2A13.014,13.014,0,0,0,12.07,9.823a1.02,1.02,0,0,0,.817-.358,1,1,0,0,0,.206-.868,3.157,3.157,0,0,1-.087-.729,3.23,3.23,0,0,1,3.227-3.227,3.184,3.184,0,0,1,2.345,1.021.993.993,0,0,0,.921.3,9.271,9.271,0,0,0,1.212-.322A6.681,6.681,0,0,1,19.685,7.162Z"
                      transform="translate(-0.991 -2.642)"
                      fill="url(#a)"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="z-10">
                <a
                  href="https://github.com/Foster-Marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-social-github hover:text-dark-100 flex h-10 w-10 items-center justify-center rounded-xl bg-[#202427] text-[#DEEFD0] transition-all md:h-[46px] md:w-[46px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.124"
                    height="17.349"
                    viewBox="0 0 16.124 17.349"
                  >
                    <path
                      d="M8.267,16.375a.788.788,0,0,0-.931-.775c-1.032.189-2.335.218-2.682-.755a4.5,4.5,0,0,0-1.448-1.9.946.946,0,0,1-.131-.086.788.788,0,0,0-.734-.509h0a.788.788,0,0,0-.788.785c0,.643.639,1.055.9,1.194A3.5,3.5,0,0,1,3.177,15.4C3.464,16.2,4.3,17.427,6.7,17.269c0,.028,0,.054,0,.078l0,.211a.788.788,0,0,0,1.577,0l0-.251C8.272,17.157,8.267,16.941,8.267,16.375ZM16.676,4.45c.025-.1.05-.208.071-.331a4.949,4.949,0,0,0-.322-2.6.79.79,0,0,0-.485-.457c-.281-.095-1.317-.281-3.3.985a10.934,10.934,0,0,0-5.009,0C5.659.8,4.628.972,4.35,1.062a.786.786,0,0,0-.5.46,4.967,4.967,0,0,0-.318,2.646c.019.1.04.194.062.279a4.943,4.943,0,0,0-.99,3.019,6.64,6.64,0,0,0,.033.727,5.148,5.148,0,0,0,4.276,5.092c-.034.1-.065.2-.093.316a.789.789,0,1,0,1.531.377,1.323,1.323,0,0,1,.369-.692.788.788,0,0,0-.43-1.376C5.57,11.6,4.387,10.49,4.21,8.049a5.212,5.212,0,0,1-.027-.582,3.357,3.357,0,0,1,.725-2.139,2.382,2.382,0,0,1,.154-.182.788.788,0,0,0,.148-.808A2.671,2.671,0,0,1,5.088,3.9,3.227,3.227,0,0,1,5.15,2.626a5.946,5.946,0,0,1,1.9.93.8.8,0,0,0,.652.1,9.285,9.285,0,0,1,4.866,0,.793.793,0,0,0,.655-.109,5.97,5.97,0,0,1,1.9-.939,3.185,3.185,0,0,1,.069,1.244,2.527,2.527,0,0,1-.133.479.788.788,0,0,0,.148.808c.061.069.122.142.176.212A3.25,3.25,0,0,1,16.1,7.466a5.549,5.549,0,0,1-.03.613c-.174,2.409-1.36,3.519-4.1,3.831a.788.788,0,0,0-.43,1.377,1.286,1.286,0,0,1,.368.716,2.413,2.413,0,0,1,.073.646v1.84c-.008.51-.008.893-.008,1.069a.788.788,0,0,0,1.577,0c0-.171,0-.546.008-1.056V14.649a3.848,3.848,0,0,0-.122-1.034,3.356,3.356,0,0,0-.092-.328,5.134,5.134,0,0,0,4.293-5.064,6.856,6.856,0,0,0,.036-.756,4.833,4.833,0,0,0-1-3.016Z"
                      transform="translate(-1.549 -0.997)"
                      fill="url(#a)"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm font-bold text-white/60 md:text-lg">
          © 2023 ABC Foundation. All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default MainFooter
