import Image from 'next/image'
import styled from 'styled-components'
import { Snackbar, Paper, LinearProgress, Chip } from '@material-ui/core'
import Countdown from 'react-countdown'

// images and icons
import BrandBlueImage from 'assets/images/brand-blue.png'
import LogoImg from 'assets/images/logo.png'
import InstagramIcon from 'assets/icons/instagram.svg'
import DiscordIcon from 'assets/icons/discord.svg'
import TwitterIcon from 'assets/icons/twitter.svg'

import { toast } from 'react-toastify'

const BorderLinearProgress = styled(LinearProgress)``

export default function Main() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col overflow-hidden pt-20 pb-[0px] sm:bg-hero-header md:pt-[75px] lg:pb-[72px]">
      <div className="m-12 flex lg:hidden">
        <Image src={LogoImg} alt="" />
      </div>
      <div className="absolute top-16 -left-[300px] block w-[950px] lg:hidden">
        <Image src={BrandBlueImage} alt="" className="z-0" />
      </div>
      <div className="grid grid-cols-12 items-center justify-between gap-5 px-4 pt-14 sm:px-8 lg:flex-row lg:gap-10 lg:pt-[87px] xl:pl-20 xl:pr-16">
        {/* left part */}
        <div className="relative order-last col-span-12 w-full pb-72 lg:order-none lg:col-span-6 lg:pb-48">
          <div className="absolute z-0 hidden lg:inset-0 lg:flex">
            <Image src={BrandBlueImage} alt="" className="object-cover" />
          </div>
          <div className="z-10 mt-28 mb-4 hidden lg:block">
            <Image src={LogoImg} alt="" />
          </div>
          <div className="relative z-10 flex items-center justify-between gap-2.5 sm:justify-start sm:gap-10">
            <p className="text-[18px] font-bold text-[#95dbd5] md:text-[28px]">
              Total Supply: <span className="pl-1">3,200</span>
            </p>
            <ul className="z-10 flex items-center gap-3 sm:gap-5">
              <li>
                <a
                  href="https://www.instagram.com/fostermarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#202427] transition-all md:h-[46px] md:w-[46px] lg:rounded-[8px]"
                >
                  <div className="flex w-5 items-center justify-center lg:w-8">
                    <Image src={InstagramIcon} alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/fostermarketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#202427] transition-all md:h-[46px] md:w-[46px] lg:rounded-[8px]"
                >
                  <div className="flex w-5 items-center justify-center lg:w-8">
                    <Image src={DiscordIcon} alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/circus_dao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#202427] transition-all md:h-[46px] md:w-[46px] lg:rounded-[8px]"
                >
                  <div className="flex w-5 items-center justify-center lg:w-8">
                    <Image src={TwitterIcon} alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="z-10 mt-3.5 mb-3.5 pb-1 text-xs text-[14px] font-normal text-[#eff0f6] md:mt-[22px] md:mb-10 md:text-[24px] md:leading-6 lg:mb-20">
              Turkey Circus is a digital art collection representing the
              governance wing of Foster Marketplace. Turkey Circus custodians
              inherit a 5% revenue share of Foster House Collections and an
              autonomous vote in the DAO.
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative z-0 ml-auto w-full max-w-[877px] rounded-md bg-[#121212] bg-presalte bg-cover bg-right bg-blend-multiply shadow-presale backdrop-blur-0 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-right before:bg-no-repeat before:content-[''] sm:rounded-2xl sm:px-8 sm:pt-8 sm:pb-7 sm:before:bg-presalte-flower md:block lg:bg-[#173639]/30 lg:backdrop-blur-xl">
              <div className="rounded-2xl bg-[#121212] px-6 py-2.5 backdrop-blur-0 sm:px-[30px] sm:py-6 lg:bg-[#173639]/30 lg:backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between gap-4 sm:mb-2">
                  <p className="text-sm font-normal text-[#EFF0F6]/80">
                    {false ? 'Total Mint' : ' '}
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-6">
                    {false ? (
                      <p className="text-sm text-[#EFF0F6] text-[#EFF0F6]/80 sm:text-base">
                        (0/0)
                      </p>
                    ) : (
                      <p className="text-sm text-[#EFF0F6] text-[#EFF0F6]/80 sm:text-base"></p>
                    )}
                  </div>
                </div>

                <div>
                  {false && (
                    <BorderLinearProgress
                      className="relative mb-4 h-1 w-full overflow-hidden rounded-md sm:bg-progress"
                      variant="determinate"
                      value={100 - (0 * 100) / 1}
                    />
                  )}{' '}
                </div>

                <div className="flex items-end gap-2 sm:items-center sm:gap-5">
                  <div className="flex items-end gap-1.5 sm:items-center sm:gap-8">
                    <div>
                      <h4 className="mb-0 text-xs font-bold text-[#EFF0F6]/80 lg:mb-2.5 lg:text-lg">
                        Price
                      </h4>
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/images/Desktop/Not Connected/Sol Ticker Component.svg"
                          alt="Sol Ticker"
                          className="h-3 w-3 flex-shrink-0 object-contain lg:h-6 lg:w-6"
                        />
                        <p className="leading-2 text-sm font-semibold text-[#EFF0F6] lg:text-2xl">
                          2
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="flex h-[27px] flex-1 items-center justify-center gap-2.5 rounded-[6px] bg-btn-connect bg-[length:100%_130%] px-6 text-center font-secondary text-[16px] font-normal uppercase leading-6 tracking-[0.01em] text-[#95DBD5] transition-all duration-300 hover:bg-[length:100%_120%] lg:h-[57px] lg:rounded-[12px] lg:text-[35px]">
                    Connect
                    <div className="h-3 w-3 lg:h-6 lg:w-6">
                      <img src="/icons/mint-logo.svg" alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right part */}
        <div className="relative z-0 col-span-12 w-full lg:col-span-6">
          <img
            src="/images/Desktop/Not Connected/Epic Circle.svg"
            alt="epic-circle"
            className="pointer-events-none absolute -top-9 left-1/4 -z-10 w-full max-w-[225px] -translate-x-1/3 object-contain sm:top-0 sm:max-w-xs xl:max-w-md"
          />
          <div className="flex h-full w-full items-center justify-end md:justify-center">
            <div
              className="flex w-5/6 object-contain sm:mt-12 lg:w-2/3 xl:w-3/5"
              dangerouslySetInnerHTML={{
                __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline style="width: 100%">
                  <source src="/videos/Turkey_Loop_Frame_Cropped_MP4.mp4" type="video/mp4" /></video>`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
