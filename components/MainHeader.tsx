import Link from 'next/link'

const MainHeader = () => {
  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-[1000] h-20 w-full overflow-hidden bg-gradient-to-r from-teal-800/[0.5] to-neutral-900/[0.5] px-4 backdrop-blur-xl md:px-6 lg:h-25">
          <div className="fixed top-0 left-0 right-0 z-[1000] h-20 w-full overflow-hidden bg-transparent px-4 backdrop-blur-xl md:px-6 lg:h-25">
            <div className="mx-auto flex h-full w-full max-w-[1620px] items-center justify-between gap-20">
              <Link href="/" passHref={true} legacyBehavior={true}>
                <a className="block h-auto w-8 lg:w-12">
                  <img
                    src="/icons/mint-logo.svg"
                    alt="Turkey Foster"
                    className="w-full object-contain"
                  />
                </a>
              </Link>

              <Link
                href="https://turkeycircus.io/"
                passHref={true}
                legacyBehavior={true}
              >
                <a className="font-secondary text-[30px] text-[#95DBD5] lg:text-[60px]">
                  TurkeyCircus.io
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
