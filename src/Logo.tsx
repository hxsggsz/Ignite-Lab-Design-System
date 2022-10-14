import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={120}
      viewBox="0 0 250 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 112.526c0-16.737 20.74-32.6 52.538-42.436C45.2 37.337 48.46 11.278 62.83 2.935 66.144.978 70.016.051 74.246.051v11.485c-2.344 0-4.23.463-5.81 1.339-6.93 4.017-9.936 19.312-7.592 38.985.56 4.84 1.478 9.939 2.599 15.14 9.987-2.472 20.892-4.377 32.358-5.613 6.879-9.527 14.014-18.18 21.199-25.75-16.613-15.604-32.206-24.153-42.805-24.153V0c14.013 0 32.358 10.094 50.907 27.604C143.651 10.197 161.996.206 176.009.206V11.69c-10.548 0-26.192 8.498-42.805 23.999 7.134 7.57 14.268 16.17 21.046 25.698 11.516 1.236 22.421 3.141 32.409 5.665a156.717 156.717 0 002.65-14.935c2.395-19.672-.561-34.968-7.44-39.036-1.529-.927-3.516-1.34-5.86-1.34V.258c4.28 0 8.153.927 11.516 2.884 14.32 8.343 17.53 34.35 10.141 67C229.362 80.03 250 95.84 250 112.527c0 16.737-20.74 32.599-52.538 42.435 7.338 32.754 4.077 58.812-10.293 67.155-3.313 1.957-7.185 2.884-11.466 2.884-14.013 0-32.358-10.094-50.907-27.604-18.549 17.407-36.893 27.398-50.907 27.398-4.28 0-8.153-.927-11.516-2.884-14.32-8.343-17.53-34.35-10.141-67C20.638 145.073 0 129.211 0 112.526zm66.347-34.35c1.886 6.643 4.23 13.493 6.88 20.342 2.089-4.12 4.28-8.24 6.675-12.36 2.344-4.12 4.841-8.137 7.338-12.05-7.236 1.08-14.217 2.42-20.893 4.068zm23.34 54.846c3.974 6.953 8.05 13.545 12.28 19.673 7.593.67 15.287 1.03 23.033 1.03 7.695 0 15.389-.36 22.931-.978a284.352 284.352 0 0012.332-19.57 268.99 268.99 0 0010.599-20.497c-3.159-6.901-6.726-13.802-10.548-20.548-3.975-6.952-8.051-13.544-12.281-19.673A262.372 262.372 0 00125 71.43c-7.695 0-15.389.36-22.931.979a284.3 284.3 0 00-12.332 19.57 269.237 269.237 0 00-10.6 20.496c3.211 6.901 6.727 13.802 10.55 20.548zm-16.46-6.694a222.164 222.164 0 00-7.033 20.496 226.404 226.404 0 0020.995 4.12c-2.497-3.965-4.994-8.034-7.338-12.205-2.344-4.12-4.535-8.292-6.624-12.411zm51.671 54.949c4.739-4.944 9.478-10.454 14.166-16.48-4.586.206-9.274.361-14.013.361-4.79 0-9.529-.103-14.166-.361a200.346 200.346 0 0014.013 16.48zm37.913-30.333c7.236-1.081 14.217-2.42 20.893-4.068-1.886-6.644-4.23-13.493-6.88-20.342-2.089 4.119-4.28 8.239-6.675 12.359a341.62 341.62 0 01-7.338 12.051zm-37.658-107.17c-4.739 4.944-9.478 10.455-14.166 16.48 4.586-.206 9.274-.36 14.013-.36 4.79 0 9.529.103 14.166.36a200.409 200.409 0 00-14.013-16.48zm37.709 30.333c2.497 3.966 4.994 8.034 7.338 12.206 2.344 4.12 4.535 8.24 6.624 12.36a222.406 222.406 0 007.033-20.497 245.199 245.199 0 00-20.995-4.069zm46.117 64.477c18.039-7.776 29.708-17.973 29.708-26.058 0-8.086-11.669-18.334-29.708-26.059-4.383-1.905-9.173-3.605-14.116-5.201-2.904 10.094-6.726 20.599-11.465 31.363 4.688 10.712 8.459 21.166 11.313 31.208 5.044-1.596 9.834-3.347 14.268-5.253zm-27.416 73.593c6.931-4.017 9.937-19.313 7.593-38.985-.56-4.841-1.478-9.94-2.599-15.141-9.988 2.472-20.893 4.377-32.358 5.613-6.879 9.528-14.014 18.18-21.199 25.75 16.613 15.604 32.206 24.153 42.805 24.153 2.293-.051 4.23-.515 5.758-1.39zM60.691 172.934c-2.395 19.673.56 34.968 7.44 39.037 1.529.927 3.516 1.339 5.86 1.339 10.548 0 26.192-8.498 42.805-23.999-7.134-7.57-14.268-16.171-21.046-25.698-11.516-1.236-22.421-3.142-32.41-5.665-1.171 5.201-2.089 10.197-2.649 14.986zm-19.619-34.35c4.383 1.906 9.173 3.605 14.115 5.202 2.905-10.094 6.727-20.6 11.466-31.363-4.688-10.712-8.459-21.166-11.313-31.209-5.045 1.597-9.835 3.348-14.319 5.253-18.039 7.776-29.708 17.973-29.708 26.059.05 8.085 11.72 18.333 29.76 26.058z"
        fill="#61DAFB"
      />
      <path
        d="M125.051 136.061c-12.861 0-23.288-10.537-23.288-23.535S112.19 88.99 125.051 88.99c12.862 0 23.288 10.538 23.288 23.536 0 12.998-10.426 23.535-23.288 23.535z"
        fill="#61DAFB"
      />
    </svg>
  )
}