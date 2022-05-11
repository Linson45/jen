import * as React from "react";
import styled from "styled-components";

export function DashboardIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M0.25 7.75H6.25V0.25H0.25V7.75ZM0.25 13.75H6.25V9.25H0.25V13.75ZM7.75 13.75H13.75V6.25H7.75V13.75ZM7.75 0.25V4.75H13.75V0.25H7.75Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
        data-name="Icon material-dashboard"
      />
    </svg>
  );
}

export function BusMenuIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M0 11C0 11.66 0.2925 12.2525 0.75 12.665V14C0.75 14.4125 1.0875 14.75 1.5 14.75H2.25C2.6625 14.75 3 14.4125 3 14V13.25H9V14C9 14.4125 9.3375 14.75 9.75 14.75H10.5C10.9125 14.75 11.25 14.4125 11.25 14V12.665C11.7075 12.2525 12 11.66 12 11V3.5C12 0.875 9.315 0.5 6 0.5C2.685 0.5 0 0.875 0 3.5V11ZM2.625 11.75C2.0025 11.75 1.5 11.2475 1.5 10.625C1.5 10.0025 2.0025 9.5 2.625 9.5C3.2475 9.5 3.75 10.0025 3.75 10.625C3.75 11.2475 3.2475 11.75 2.625 11.75ZM9.375 11.75C8.7525 11.75 8.25 11.2475 8.25 10.625C8.25 10.0025 8.7525 9.5 9.375 9.5C9.9975 9.5 10.5 10.0025 10.5 10.625C10.5 11.2475 9.9975 11.75 9.375 11.75ZM10.5 7.25H1.5V3.5H10.5V7.25Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
        data-name="Icon material-dashboard"
      />
    </svg>
  );
}

export function DriverIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 2.75C9.245 2.75 10.25 3.755 10.25 5C10.25 6.245 9.245 7.25 8 7.25C6.755 7.25 5.75 6.245 5.75 5C5.75 3.755 6.755 2.75 8 2.75ZM8 13.4C6.125 13.4 4.4675 12.44 3.5 10.985C3.5225 9.4925 6.5 8.675 8 8.675C9.4925 8.675 12.4775 9.4925 12.5 10.985C11.5325 12.44 9.875 13.4 8 13.4Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
      />
    </svg>
  );
}

export function TourIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.375 0.25L13.255 0.2725L9.25 1.825L4.75 0.25L0.52 1.675C0.3625 1.7275 0.25 1.8625 0.25 2.035V13.375C0.25 13.585 0.415 13.75 0.625 13.75L0.745 13.7275L4.75 12.175L9.25 13.75L13.48 12.325C13.6375 12.2725 13.75 12.1375 13.75 11.965V0.625C13.75 0.415 13.585 0.25 13.375 0.25ZM9.25 12.25L4.75 10.6675V1.75L9.25 3.3325V12.25Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
      />
    </svg>
  );
}

export function LogoutIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        d="M10.5 6H9.75V4.5C9.75 2.43 8.07 0.75 6 0.75C3.93 0.75 2.25 2.43 2.25 4.5V6H1.5C0.675 6 0 6.675 0 7.5V15C0 15.825 0.675 16.5 1.5 16.5H10.5C11.325 16.5 12 15.825 12 15V7.5C12 6.675 11.325 6 10.5 6ZM6 12.75C5.175 12.75 4.5 12.075 4.5 11.25C4.5 10.425 5.175 9.75 6 9.75C6.825 9.75 7.5 10.425 7.5 11.25C7.5 12.075 6.825 12.75 6 12.75ZM8.325 6H3.675V4.5C3.675 3.2175 4.7175 2.175 6 2.175C7.2825 2.175 8.325 3.2175 8.325 4.5V6Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
      />
    </svg>
  );
}

export function BookingIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        d="M1.66667 0C0.75 0 0.00833352 0.75 0.00833352 1.66667L0 15C0 15.9167 0.741666 16.6667 1.65833 16.6667H11.6667C12.5833 16.6667 13.3333 15.9167 13.3333 15V5L8.33333 0H1.66667ZM7.5 5.83333V1.25L12.0833 5.83333H7.5Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
      />
    </svg>
  );
}

export function CustomerIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 2.75C9.245 2.75 10.25 3.755 10.25 5C10.25 6.245 9.245 7.25 8 7.25C6.755 7.25 5.75 6.245 5.75 5C5.75 3.755 6.755 2.75 8 2.75ZM8 13.4C6.125 13.4 4.4675 12.44 3.5 10.985C3.5225 9.4925 6.5 8.675 8 8.675C9.4925 8.675 12.4775 9.4925 12.5 10.985C11.5325 12.44 9.875 13.4 8 13.4Z"
        fill={props.isActive ? '#FD6D03' : '#212121'}
        fill-opacity="0.7"
      />
    </svg>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <svg width="0.8em" height="0.8em" viewBox="0 0 12 20" {...props}>
      <path
        data-name="Icon ionic-ios-arrow-back"
        d="M11.67 1.8701L9.9 0.100098L0 10.0001L9.9 19.9001L11.67 18.1301L3.54 10.0001L11.67 1.8701Z"
        fill="black"
      />
    </svg>
  );
}

export function BusIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 12.66 3.2925 13.2525 3.75 13.665V15C3.75 15.4125 4.0875 15.75 4.5 15.75H5.25C5.6625 15.75 6 15.4125 6 15V14.25H12V15C12 15.4125 12.3375 15.75 12.75 15.75H13.5C13.9125 15.75 14.25 15.4125 14.25 15V13.665C14.7075 13.2525 15 12.66 15 12V4.5C15 1.875 12.315 1.5 9 1.5C5.685 1.5 3 1.875 3 4.5V12ZM5.625 12.75C5.0025 12.75 4.5 12.2475 4.5 11.625C4.5 11.0025 5.0025 10.5 5.625 10.5C6.2475 10.5 6.75 11.0025 6.75 11.625C6.75 12.2475 6.2475 12.75 5.625 12.75ZM12.375 12.75C11.7525 12.75 11.25 12.2475 11.25 11.625C11.25 11.0025 11.7525 10.5 12.375 10.5C12.9975 10.5 13.5 11.0025 13.5 11.625C13.5 12.2475 12.9975 12.75 12.375 12.75ZM13.5 8.25H4.5V4.5H13.5V8.25Z" fill="white" />
    </svg>
  );
}

export function EditIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        data-name="Icon awesome-edit"
        d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329V4.69329Z"
        fill="#000"
      />
    </svg>
  );
}
export function DeleteIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        data-name="Icon awesome-edit"
        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 7V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6ZM14 14V18H10V14H8L12 10L16 14H14Z"
        fill="#000"
      />
    </svg>
  );
}
export function WifiIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.896 16.793" {...props}>
      <path
        data-name="Icon awesome-edit"
        d="M1.38379 8.25003L3.21712 10.0834C7.77296 5.52753 15.1613 5.52753 19.7171 10.0834L21.5505 8.25003C15.9863 2.68586 6.95712 2.68586 1.38379 8.25003ZM8.71712 15.5834L11.4671 18.3334L14.2171 15.5834C12.7046 14.0617 10.2388 14.0617 8.71712 15.5834ZM5.05046 11.9167L6.88379 13.75C9.41379 11.22 13.5205 11.22 16.0505 13.75L17.8838 11.9167C14.3455 8.37836 8.59796 8.37836 5.05046 11.9167Z"
        fill="#FD6D03"
      />
    </svg>
  );
}

/************************************************************************************* */

export function AddIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21.118 21.118" {...props}>
      <path
        data-name="Icon material-add-to-photos"
        d="M2.112 4.224H0v14.782a2.118 2.118 0 002.112 2.112h14.783v-2.112H2.112zM19.006 0H6.335a2.118 2.118 0 00-2.111 2.112v12.671a2.118 2.118 0 002.112 2.112h12.67a2.118 2.118 0 002.112-2.112V2.112A2.118 2.118 0 0019.006 0zM17.95 9.5h-4.223v4.224h-2.112V9.5H7.391V7.391h4.224V3.168h2.112v4.224h4.223z"
        fill="#fff"
        opacity={0.272}
      />
    </svg>
  );
}

export function ArrowDownIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.943 5.471" {...props}>
      <path
        data-name="Icon ionic-md-arrow-dropdown"
        d="M0 0l5.471 5.471L10.943 0z"
        fill="#707070"
      />
    </svg>
  );
}
export function ArrowExpandIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 41 41" {...props}>
      <defs>
        <style>
          {
            ".prefix__cls-2{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <g
        id="prefix__Group_3226"
        data-name="Group 3226"
        transform="translate(-24 -910)"
      >
        <g
          id="prefix__Ellipse_23"
          data-name="Ellipse 23"
          transform="translate(24 910)"
          fill="#6d6e7e"
          stroke="#232631"
          strokeWidth={4}
        >
          <circle cx={20.5} cy={20.5} r={20.5} stroke="none" />
          <circle cx={20.5} cy={20.5} r={18.5} fill="none" />
        </g>
        <g
          id="prefix__Icon_feather-arrow-right"
          data-name="Icon feather-arrow-right"
          transform="translate(31.287 917.287)"
        >
          <path
            id="prefix__Path_436"
            data-name="Path 436"
            className="prefix__cls-2"
            d="M7.5 18h11.426"
            transform="translate(0 -4.787)"
          />
          <path
            id="prefix__Path_437"
            data-name="Path 437"
            className="prefix__cls-2"
            d="M18 7.5l5.713 5.713L18 18.926"
            transform="translate(-4.787)"
          />
        </g>
      </g>
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 4.503 7.876" {...props}>
      <path
        data-name="Icon ionic-ios-arrow-back"
        d="M3.149 3.937L.169.959a.564.564 0 11.8-.795l3.37 3.374a.562.562 0 01.016.776l-3.391 3.4a.564.564 0 01-.8-.795z"
        fill="#fff"
      />
    </svg>
  );
}
export function BellIcon(props) {
  let fillColor = "#343540";
  if (props.color == "red") {
    fillColor = "#F13F3F";
  } else {
    fillColor = "#07ba00";
  }
  return (
    <svg width="1em" height="1em" viewBox="0 0 17.272 20.413" {...props}>
      <path
        data-name="Icon ionic-md-notifications-outline"
        d="M8.685 3.556a7.094 7.094 0 011.173.22 5 5 0 013.812 4.9v6.262l.457.459.382.384H2.763l.382-.384.457-.459V8.675a5 5 0 013.812-4.9 8.687 8.687 0 011.173-.22m.049-3.556A1.5 1.5 0 007.112 1.53v.715a6.615 6.615 0 00-5.08 6.43v5.613L0 16.33v1.021h17.275V16.33l-2.032-2.041V8.675a6.615 6.615 0 00-5.08-6.43v-.714A1.5 1.5 0 008.639 0zm2.032 18.371H6.604a2.032 2.032 0 104.064 0z"
        fill={fillColor}
      />
    </svg>
  );
}
export function IconBellDashboard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12.004 13.719" {...props}>
      <path
        data-name="Icon awesome-bell"
        d="M6 13.719A1.715 1.715 0 007.716 12H4.288A1.715 1.715 0 006 13.719zm5.771-4.011c-.518-.556-1.486-1.393-1.486-4.134a4.231 4.231 0 00-3.426-4.158V.857a.857.857 0 10-1.714 0v.558a4.231 4.231 0 00-3.428 4.158c0 2.741-.969 3.578-1.486 4.134a.837.837 0 00-.231.582.858.858 0 00.86.857h10.284a.858.858 0 00.86-.857.837.837 0 00-.231-.582z"
        fill="#ff7474"
      />
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.429 11.919" {...props}>
      <path
        data-name="Icon awesome-calendar-alt"
        d="M0 10.8a1.118 1.118 0 001.117 1.117h8.194a1.118 1.118 0 001.118-1.117V4.47H0zm7.449-4.561a.28.28 0 01.279-.279h.932a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zm0 2.98a.28.28 0 01.279-.279h.932a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zM4.47 6.239a.28.28 0 01.279-.279h.931a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zm0 2.98a.28.28 0 01.279-.279h.931a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zm-2.98-2.98a.28.28 0 01.279-.279H2.7a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zm0 2.98a.28.28 0 01.279-.279H2.7a.28.28 0 01.279.279v.931a.28.28 0 01-.279.279h-.931a.28.28 0 01-.279-.279zM9.311 1.49H8.194V.372A.374.374 0 007.822 0h-.745A.374.374 0 006.7.372V1.49H3.725V.372A.374.374 0 003.352 0h-.745a.374.374 0 00-.372.372V1.49H1.117A1.118 1.118 0 000 2.607v1.118h10.429V2.607A1.118 1.118 0 009.311 1.49z"
        fill="#fff"
      />
    </svg>
  );
}
export function DownIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 8 7" {...props}>
      <path data-name="Polygon 21" d="M4 7L0 0h8z" fill="#ff0505" />
    </svg>
  );
}
export function DragIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9.649 15.649" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={1.051}
          y1={1.235}
          x2={-0.08}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#232631" />
          <stop offset={1} stopColor="#232631" />
        </linearGradient>
        <style>
          {".prefix__cls-1{stroke:#f8f8f8;fill:url(#prefix__linear-gradient)}"}
        </style>
      </defs>
      <g
        id="prefix__Group_3227"
        data-name="Group 3227"
        transform="translate(-6.5 -14.416)"
      >
        <path
          id="prefix__Icon_metro-more-vert"
          data-name="Icon metro-more-vert"
          className="prefix__cls-1"
          d="M17.255 11.374a1.831 1.831 0 10-1.831-1.831 1.831 1.831 0 001.831 1.831zm0 1.831a1.831 1.831 0 101.831 1.831 1.831 1.831 0 00-1.831-1.83zm0 5.494a1.831 1.831 0 101.831 1.831 1.831 1.831 0 00-1.831-1.83z"
          transform="translate(-8.424 7.204)"
        />
        <path
          id="prefix__Icon_metro-more-vert-2"
          data-name="Icon metro-more-vert"
          className="prefix__cls-1"
          d="M17.255 11.374a1.831 1.831 0 10-1.831-1.831 1.831 1.831 0 001.831 1.831zm0 1.831a1.831 1.831 0 101.831 1.831 1.831 1.831 0 00-1.831-1.83zm0 5.494a1.831 1.831 0 101.831 1.831 1.831 1.831 0 00-1.831-1.83z"
          transform="translate(-3.438 7.204)"
        />
      </g>
    </svg>
  );
}

export function ExportIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 31 21.7" {...props}>
      <path
        data-name="Icon awesome-cloud-download-alt"
        d="M26.04 9.426A4.656 4.656 0 0021.7 3.1a4.626 4.626 0 00-2.582.785A7.751 7.751 0 004.65 7.75c0 .131 0 .262.01.392A6.977 6.977 0 006.975 21.7H24.8a6.2 6.2 0 001.24-12.274zm-6.437 4.3L14.5 18.828a.778.778 0 01-1.095 0L8.3 13.722a.775.775 0 01.547-1.322h3.168V6.975a.777.777 0 01.775-.775h2.325a.777.777 0 01.775.775V12.4h3.168a.775.775 0 01.547 1.322z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function Forecast(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14.273 14.273" {...props}>
      <path
        data-name="Icon material-collections-bookmark"
        d="M1.427 2.855H0v9.991a1.432 1.432 0 001.427 1.427h9.991v-1.427H1.427zM12.846 0H4.282a1.432 1.432 0 00-1.427 1.427v8.564a1.432 1.432 0 001.427 1.427h8.564a1.432 1.432 0 001.427-1.427V1.427A1.432 1.432 0 0012.846 0zm0 7.137l-1.784-1.07-1.784 1.07v-5.71h3.568z"
        fill="#a5a4bf"
      />
    </svg>
  );
}
export function ForecastIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.101 10.101" {...props}>
      <path
        data-name="Icon open-graph"
        d="M8.876 0L5.05 3.788 3.788 2.525 0 6.351l1.263 1.262L3.788 5.05 5.05 6.313l5.05-5.05zM0 8.838V10.1h10.1V8.838z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function IconCross(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13.944 13.944" {...props}>
      <path
        data-name="Icon metro-cross"
        d="M12.82 10.588h0L9.206 6.972l3.613-3.614h0a.373.373 0 000-.526l-1.707-1.707a.373.373 0 00-.526 0h0L6.972 4.739 3.358 1.125h0a.373.373 0 00-.526 0L1.125 2.832a.373.373 0 000 .526h0l3.613 3.614-3.613 3.616h0a.373.373 0 000 .526l1.707 1.707a.373.373 0 00.526 0h0l3.614-3.614 3.614 3.614h0a.373.373 0 00.526 0l1.707-1.707a.373.373 0 000-.526z"
        fill="#fff"
        stroke="#3a3b48"
        strokeWidth={2}
      />
    </svg>
  );
}
export function IconLeft(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9.692 16.953" {...props}>
      <path
        data-name="Icon ionic-ios-arrow-back"
        d="M2.921 8.474l6.415-6.41A1.212 1.212 0 007.62.353L.349 7.616a1.209 1.209 0 00-.035 1.671l7.3 7.313a1.212 1.212 0 101.716-1.711z"
        fill="#fff"
      />
    </svg>
  );
}
export function ImportIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17.234 15.32" {...props}>
      <path
        data-name="Icon awesome-file-export"
        d="M11.49 3.648a.716.716 0 00-.209-.506L8.351.209A.718.718 0 007.843 0H7.66v3.83h3.83zm5.6 5.569l-2.868-2.885a.48.48 0 00-.82.338v1.948h-1.915v1.915H13.4v1.951a.48.48 0 00.82.338l2.864-2.888a.509.509 0 00.002-.718zm-11.341.838V9.1a.48.48 0 01.479-.479h5.262V4.788H7.421a.72.72 0 01-.721-.719V0H.718A.716.716 0 000 .718V14.6a.716.716 0 00.718.718h10.054a.716.716 0 00.718-.718v-4.067H6.224a.48.48 0 01-.479-.479z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function InfoIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.228 10.228" {...props}>
      <path
        data-name="Icon ionic-ios-information-circle"
        d="M5.114 0a5.114 5.114 0 105.111 5.114A5.113 5.113 0 005.114 0zm.467 7.474h-.939V3.931h.939zm-.469-3.929a.491.491 0 11.513-.491.493.493 0 01-.513.491z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function InsightsIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 6.662 9.517" {...props}>
      <path
        data-name="Icon material-lightbulb-outline"
        d="M1.9 9.041a.477.477 0 00.476.476h1.9a.477.477 0 00.476-.476v-.476H1.9zM3.331 0a3.33 3.33 0 00-1.9 6.062v1.075a.477.477 0 00.476.476h2.855a.477.477 0 00.476-.476V6.062A3.33 3.33 0 003.331 0zm1.356 5.282l-.4.286v1.094h-1.9V5.567l-.4-.286a2.379 2.379 0 112.712 0z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function ManualOverideIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.642 14.985" {...props}>
      <path
        data-name="Icon ionic-ios-bookmark"
        d="M0 1.153V14.84a.169.169 0 00.266.115l4.855-3.314a.379.379 0 01.4 0l4.855 3.314a.169.169 0 00.266-.115V1.153A1.25 1.25 0 009.312 0H1.33A1.25 1.25 0 000 1.153z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function NetCashIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15.206 11.941" {...props}>

      <defs>
        <style>{".prefix__cls-3{fill:#000}"}</style>
      </defs>
      <g
        id="prefix__Icon_ionic-ios-cash"
        data-name="Icon ionic-ios-cash"
        transform="translate(-2.25 -5.632)"
      >
        <path
          id="prefix__Path_150"
          data-name="Path 150"
          className="prefix__cls-3"
          d="M16.981 25.024H2.725a.475.475 0 100 .95h14.256a.475.475 0 000-.95z"

          transform="translate(0 -10.031)"
        />
        <path
          id="prefix__Path_151"
          data-name="Path 151"
          className="prefix__cls-3"
          d="M16.981 28.4H2.725a.475.475 0 100 .95h14.256a.475.475 0 000-.95z"

          transform="translate(0 -11.777)"
        />
        <path
          id="prefix__Path_152"
          data-name="Path 152"
          className="prefix__cls-3"
          d="M16.265 5.632H3.441A1.2 1.2 0 002.25 6.823v6.035a1.2 1.2 0 001.191 1.192h12.824a1.2 1.2 0 001.191-1.191V6.823a1.2 1.2 0 00-1.191-1.191zM5.033 12.964H3.811a.475.475 0 010-.95h1.222a.475.475 0 110 .95zm0-5.3H3.811a.475.475 0 010-.95h1.222a.475.475 0 010 .95zm4.82 4.888a2.715 2.715 0 112.715-2.715 2.719 2.719 0 01-2.715 2.719zm6.042.407h-1.222a.475.475 0 010-.95h1.222a.475.475 0 110 .95zm0-5.3h-1.222a.475.475 0 010-.95h1.222a.475.475 0 110 .95z"

        />
        <path
          id="prefix__Path_153"
          data-name="Path 153"
          className="prefix__cls-3"
          d="M17.871 12.557a1.8 1.8 0 11-1.8-1.8 1.8 1.8 0 011.8 1.8z"

          transform="translate(-6.219 -2.651)"
        />
      </g>
    </svg>
  );
}
export function OrdersIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14.092 14.092" {...props}>
      <path
        data-name="Icon ionic-ios-list-box"
        d="M0 1.175v11.742a1.176 1.176 0 001.175 1.175h11.742a1.176 1.176 0 001.175-1.175V1.175A1.176 1.176 0 0012.917 0H1.175A1.174 1.174 0 000 1.175zm3.025 10.062a.676.676 0 11.583-.583.674.674 0 01-.583.583zm0-3.522a.676.676 0 11.583-.583.674.674 0 01-.583.583zm0-3.522a.676.676 0 11.583-.583.674.674 0 01-.583.583zm8.379 6.848h-6.1a.476.476 0 01-.474-.474.476.476 0 01.474-.474h6.1a.476.476 0 01.474.474.476.476 0 01-.475.474zm0-3.522h-6.1a.476.476 0 01-.474-.474.476.476 0 01.474-.474h6.1a.476.476 0 01.474.474.476.476 0 01-.475.473zm0-3.522h-6.1a.476.476 0 01-.471-.472.476.476 0 01.474-.474h6.1a.476.476 0 01.474.474.476.476 0 01-.478.471z"
        fill="#000"
      />
    </svg>
  );
}
export function ProfileIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17.928 19.919" {...props}>
      <defs>
        <style>
          {
            ".prefix__cls-4{fill:none;stroke:#343540;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <g
        id="prefix__Icon_feather-user"
        data-name="Icon feather-user"
        transform="translate(-5 -3.5)"
      >
        <path
          id="prefix__Path_409"
          data-name="Path 409"
          className="prefix__cls-4"
          d="M21.928 28.473v-1.991a3.982 3.982 0 00-3.982-3.982H9.982A3.982 3.982 0 006 26.482v1.991"
          transform="translate(0 -6.054)"
        />
        <path
          id="prefix__Path_410"
          data-name="Path 410"
          className="prefix__cls-4"
          d="M19.964 8.482A3.982 3.982 0 1115.982 4.5a3.982 3.982 0 013.982 3.982z"
          transform="translate(-2.018)"
        />
      </g>
    </svg>
  );
}
export function ReceivablesIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13.347 13.347" {...props}>
      <path
        data-name="Icon awesome-file-import"
        d="M.417 7.508A.418.418 0 000 7.925v.834a.418.418 0 00.417.417h2.92V7.508zm12.748-4.771L10.613.182A.625.625 0 0010.169 0h-.159v3.337h3.337v-.159a.624.624 0 00-.182-.441zm-3.989.808V0H3.962a.624.624 0 00-.626.626v6.882h3.338v-1.7a.418.418 0 01.714-.295L9.88 8.029a.444.444 0 010 .626l-2.495 2.513a.418.418 0 01-.714-.295v-1.7H3.337v3.545a.624.624 0 00.626.626h8.759a.624.624 0 00.626-.626V4.171H9.8a.627.627 0 01-.624-.626z"
        fill="#a5a4bf"
      />
    </svg>
  );
}
export function RedIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.125 9" {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h10.125v9H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          data-name="close"
          d="M6.814 4.5l2.9-2.587a1.008 1.008 0 000-1.575 1.324 1.324 0 00-1.766 0l-2.9 2.588L2.145.337a1.324 1.324 0 00-1.766 0 1.008 1.008 0 000 1.575L3.281 4.5.379 7.088a1.008 1.008 0 000 1.575A1.215 1.215 0 001.262 9a1.215 1.215 0 00.883-.337l2.9-2.588 2.9 2.588a1.324 1.324 0 001.766 0 1.008 1.008 0 000-1.575z"
          fill="red"
        />
      </g>
    </svg>
  );
}
export function RefreshIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        data-name="Icon ionic-md-refresh"
        d="M8 14A6 6 0 018 2a5.813 5.813 0 014.2 1.8L9 7h7V0l-2.35 2.35a7.99 7.99 0 102.05 7.832h-2.116A5.958 5.958 0 018 14z"
        fill="#fff"
      />
    </svg>
  );
}
export function ScenarioIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15.424 12.532" {...props}>
      <path
        data-name="Icon awesome-list-ul"
        d="M1.446 0a1.446 1.446 0 101.446 1.446A1.446 1.446 0 001.446 0zm0 4.82a1.446 1.446 0 101.446 1.446 1.446 1.446 0 00-1.446-1.441zm0 4.82a1.446 1.446 0 101.446 1.446A1.446 1.446 0 001.446 9.64zm13.5.482H5.3a.482.482 0 00-.482.482v.964a.482.482 0 00.482.482h9.64a.482.482 0 00.482-.482v-.964a.482.482 0 00-.48-.479zm0-9.64H5.3a.482.482 0 00-.482.482v.961a.482.482 0 00.482.482h9.64a.482.482 0 00.482-.482V.964a.482.482 0 00-.48-.482zm0 4.82H5.3a.482.482 0 00-.482.482v.964a.482.482 0 00.482.482h9.64a.482.482 0 00.482-.482v-.964a.482.482 0 00-.48-.482z"
        fill="#000"
      />
    </svg>
  );
}
export function SearchIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.416 18.414" {...props}>
      <defs>
        <style>
          {
            ".prefix__cls-5{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
          }
        </style>
      </defs>
      <g
        id="prefix__Icon_feather-search"
        data-name="Icon feather-search"
        transform="translate(-3.5 -3.5)"
      >
        <path
          id="prefix__Path_458"
          data-name="Path 458"
          className="prefix__cls-5"
          d="M18.5 11.5a7 7 0 11-7-7 7 7 0 017 7z"
        />
        <path
          id="prefix__Path_459"
          data-name="Path 459"
          className="prefix__cls-5"
          d="M29.325 29.325l-4.35-4.35"
          transform="translate(-8.824 -8.825)"
        />
      </g>
    </svg>
  );
}
export function SettingIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        data-name="Path 108"
        d="M13.3 5.2l1.1-2.1L13 1.7l-2.1 1.1a3.582 3.582 0 00-1.1-.4L9 0H7l-.8 2.3a4.179 4.179 0 00-1 .4L3.1 1.6 1.6 3.1l1.1 2.1a4.179 4.179 0 00-.4 1L0 7v2l2.3.8c.1.4.3.7.4 1.1L1.6 13 3 14.4l2.1-1.1a3.582 3.582 0 001.1.4L7 16h2l.8-2.3c.4-.1.7-.3 1.1-.4l2.1 1.1 1.4-1.4-1.1-2.1a3.582 3.582 0 00.4-1.1L16 9V7l-2.3-.8a4.179 4.179 0 00-.4-1zM8 11a2.946 2.946 0 01-3-3 2.946 2.946 0 013-3 2.946 2.946 0 013 3 2.946 2.946 0 01-3 3z"
        fill="#000"
      />
    </svg>
  );
}
export function SmEditIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13.174 11.708" {...props}>
      <path
        data-name="Icon awesome-edit"
        d="M9.208 1.901l2.063 2.063a.224.224 0 010 .316l-5 5-2.123.236a.445.445 0 01-.492-.492L3.9 6.893l5-5a.224.224 0 01.308.008zm3.705-.524L11.8.261a.9.9 0 00-1.263 0l-.81.81a.224.224 0 000 .316L11.79 3.45a.224.224 0 00.316 0l.81-.81a.9.9 0 000-1.263zm-4.13 6.539v2.328H1.464V2.925H6.72a.281.281 0 00.194-.08l.915-.915a.274.274 0 00-.194-.469H1.1A1.1 1.1 0 000 2.559v8.051a1.1 1.1 0 001.1 1.1h8.049a1.1 1.1 0 001.1-1.1V7.001a.275.275 0 00-.469-.194l-.915.915a.281.281 0 00-.082.194z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function SmallEditIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13.174 11.708" {...props}>
      <path
        data-name="Icon awesome-edit"
        d="M9.208 1.901l2.063 2.063a.224.224 0 010 .316l-5 5-2.123.236a.445.445 0 01-.492-.492L3.9 6.893l5-5a.224.224 0 01.308.008zm3.705-.524L11.8.261a.9.9 0 00-1.263 0l-.81.81a.224.224 0 000 .316L11.79 3.45a.224.224 0 00.316 0l.81-.81a.9.9 0 000-1.263zm-4.13 6.539v2.328H1.464V2.925H6.72a.281.281 0 00.194-.08l.915-.915a.274.274 0 00-.194-.469H1.1A1.1 1.1 0 000 2.559v8.051a1.1 1.1 0 001.1 1.1h8.049a1.1 1.1 0 001.1-1.1V7.001a.275.275 0 00-.469-.194l-.915.915a.281.281 0 00-.082.194z"
        fill="#33c2df"
      />
    </svg>
  );
}
export function SortIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 5.747 7.996" {...props}>
      <path
        data-name="Icon awesome-sort"
        d="M.483 4.641h4.78a.483.483 0 01.341.823l-2.39 2.39a.48.48 0 01-.681 0L.142 5.464a.483.483 0 01.341-.823zm5.126-2.109L3.219.142a.48.48 0 00-.681 0L.142 2.532a.483.483 0 00.341.823h4.78a.483.483 0 00.346-.823z"
        fill="#fff"
      />
    </svg>
  );
}
export function TopArrowSubmenuIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9.315 5.326" {...props}>
      <path
        data-name="Icon ionic-ios-arrow-down"
        d="M4.659 1.606l3.522 3.525a.663.663 0 00.94 0 .671.671 0 000-.943L5.13.194a.664.664 0 00-.918-.019L.193 4.185a.666.666 0 10.94.943z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
export function UpIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 8 7" {...props}>
      <path data-name="Polygon 19" d="M4 0l4 7H0z" fill="#07ba00" />
    </svg>
  );
}

export function ViewIcon(props) {
  return (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5002 4.5C6.7085 4.5 2.61641 7.61 0.958496 12C2.61641 16.39 6.7085 19.5 11.5002 19.5C16.2918 19.5 20.3839 16.39 22.0418 12C20.3839 7.61 16.2918 4.5 11.5002 4.5ZM11.5002 17C8.85516 17 6.7085 14.76 6.7085 12C6.7085 9.24 8.85516 7 11.5002 7C14.1452 7 16.2918 9.24 16.2918 12C16.2918 14.76 14.1452 17 11.5002 17ZM11.5002 9C9.90933 9 8.62516 10.34 8.62516 12C8.62516 13.66 9.90933 15 11.5002 15C13.091 15 14.3752 13.66 14.3752 12C14.3752 10.34 13.091 9 11.5002 9Z" fill="#FD6D03" />
    </svg>
  );
}

export function FilterIcon(props) {
  return (
    <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33333 16.75H14.6667V14H9.33333V16.75ZM0 0.25V3H24V0.25H0ZM4 9.875H20V7.125H4V9.875Z" fill="white" />
    </svg>
  );
}
export function Email(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.333 2.66675H2.66634C1.93301 2.66675 1.33967 3.26675 1.33967 4.00008L1.33301 12.0001C1.33301 12.7334 1.93301 13.3334 2.66634 13.3334H13.333C14.0663 13.3334 14.6663 12.7334 14.6663 12.0001V4.00008C14.6663 3.26675 14.0663 2.66675 13.333 2.66675ZM13.333 5.33341L7.99967 8.66675L2.66634 5.33341V4.00008L7.99967 7.33341L13.333 4.00008V5.33341Z" fill="black" />
    </svg>
  );
}
export function Back(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.67 3.8701L9.9 2.1001L0 12.0001L9.9 21.9001L11.67 20.1301L3.54 12.0001L11.67 3.8701Z" fill="black" />
    </svg>
  );
}
export function callBlack(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.86167 6.29417C4.70167 7.945 6.055 9.2925 7.70583 10.1383L8.98917 8.855C9.14667 8.6975 9.38 8.645 9.58417 8.715C10.2375 8.93083 10.9433 9.0475 11.6667 9.0475C11.9875 9.0475 12.25 9.31 12.25 9.63083V11.6667C12.25 11.9875 11.9875 12.25 11.6667 12.25C6.18917 12.25 1.75 7.81083 1.75 2.33333C1.75 2.0125 2.0125 1.75 2.33333 1.75H4.375C4.69583 1.75 4.95833 2.0125 4.95833 2.33333C4.95833 3.0625 5.075 3.7625 5.29083 4.41583C5.355 4.62 5.30833 4.8475 5.145 5.01083L3.86167 6.29417Z" fill="black" />
    </svg>
  );
}

export function Search(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" />
    </svg>

  );
}
export function Calender(props) {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z" fill="#FD6D03" />
    </svg>

  );
}
export function AirCondition(props) {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0236 7.83175L11.6085 6.91667L12.5236 3.5016M8.00007 1.5V16.5V1.5ZM10.5001 2.33333L8.00007 4.83333L5.50007 2.33333H10.5001ZM5.50007 15.6667L8.00007 13.1667L10.5001 15.6667H5.50007ZM1.50488 5.25L14.4952 12.75L1.50488 5.25ZM3.47656 3.5016L4.39163 6.91667L0.976562 7.83175L3.47656 3.5016ZM12.5236 14.4984L11.6085 11.0833L15.0236 10.1683L12.5236 14.4984ZM1.50491 12.75L14.4953 5.24999L1.50491 12.75ZM0.976579 10.1683L4.39164 11.0833L3.47658 14.4984L0.976579 10.1683Z" stroke="#FD6D03" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
}
export function Featurebathroom(props) {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_303_2339)">
        <path d="M4.72706 0C3.16223 0 1.89372 2.51836 1.89372 5.625V10.6661C1.89372 11.8708 1.60449 12.5051 0.973774 14.383C0.871951 14.6865 1.0995 15 1.4218 15H9.71285C10.1193 15 10.4802 14.7419 10.6089 14.359C10.9876 13.2316 11.3382 12.2379 11.3382 10.6661V5.625C11.3382 3.17578 12.0368 1.12734 13.122 0H4.72706ZM3.78261 6.5625C3.52171 6.5625 3.31039 6.35273 3.31039 6.09375C3.31039 5.83477 3.52171 5.625 3.78261 5.625C4.04352 5.625 4.25484 5.83477 4.25484 6.09375C4.25484 6.35273 4.04352 6.5625 3.78261 6.5625ZM5.67151 6.5625C5.4106 6.5625 5.19928 6.35273 5.19928 6.09375C5.19928 5.83477 5.4106 5.625 5.67151 5.625C5.93241 5.625 6.14373 5.83477 6.14373 6.09375C6.14373 6.35273 5.93241 6.5625 5.67151 6.5625ZM7.5604 6.5625C7.29949 6.5625 7.08817 6.35273 7.08817 6.09375C7.08817 5.83477 7.29949 5.625 7.5604 5.625C7.8213 5.625 8.03262 5.83477 8.03262 6.09375C8.03262 6.35273 7.8213 6.5625 7.5604 6.5625ZM9.44929 6.5625C9.18839 6.5625 8.97707 6.35273 8.97707 6.09375C8.97707 5.83477 9.18839 5.625 9.44929 5.625C9.71019 5.625 9.92151 5.83477 9.92151 6.09375C9.92151 6.35273 9.71019 6.5625 9.44929 6.5625ZM15.116 0C13.5511 0 12.2826 2.51836 12.2826 5.625C12.2826 8.73164 13.5511 11.25 15.116 11.25C16.6808 11.25 17.9493 8.73164 17.9493 5.625C17.9493 2.51836 16.6808 0 15.116 0ZM15.116 7.5C14.5944 7.5 14.1715 6.66064 14.1715 5.625C14.1715 4.58936 14.5944 3.75 15.116 3.75C15.6375 3.75 16.0604 4.58936 16.0604 5.625C16.0604 6.66064 15.6375 7.5 15.116 7.5Z" fill="#FD6D03" />
      </g>
      <defs>
        <clipPath id="clip0_303_2339">
          <rect width="17" height="15" fill="white" transform="translate(0.949219)" />
        </clipPath>
      </defs>
    </svg>

  );
}
export function FeatureKitchen(props) {
  return (
    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3931 8.36941C16.3682 6.40575 15.5844 4.56351 14.187 3.18232C12.9543 1.9646 11.3689 1.22875 9.66373 1.0709C9.7056 0.976504 9.72911 0.872114 9.72911 0.762145C9.72911 0.341195 9.38788 0 8.96696 0C8.54601 0 8.20482 0.341229 8.20482 0.762145C8.20482 0.87208 8.22826 0.976471 8.2702 1.0709C6.56505 1.22878 4.97963 1.96463 3.74697 3.18232C2.34948 4.56347 1.56576 6.40571 1.54079 8.36941L1.53418 8.89641H16.3998L16.3931 8.36941ZM4.07648 7.10965L3.06826 6.85014C3.0936 6.75196 3.71114 4.43823 5.82781 3.51674L6.24344 4.47117C4.58717 5.19211 4.08132 7.09056 4.07648 7.10965Z" fill="#FD6D03" />
      <path d="M17.4668 9.87671H0.466797V10.9175H17.4668V9.87671Z" fill="#FD6D03" />
    </svg>
  );
}
export function FeatureCharger(props) {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.56846 0V4.43505H11.432V0H13.1122V4.43505H14.9937V7.15653H13.7611L13.2182 11.6924H12.037V13.3218H10.6464L10.6463 14.4043C10.6464 15.8267 11.8035 16.9841 13.226 16.9842L13.2258 19C10.6921 18.9999 8.63053 16.9383 8.63044 14.4043L8.63053 13.3218H6.96357V11.6924H5.7823L5.23947 7.15653H4.00684V4.43505H5.88836V0H7.56846Z" fill="#FD6D03" />
    </svg>
  );
}
export function FeatureSeater(props) {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0176 9.33838C12.17 9.33838 13.915 7.60232 13.915 5.4608C13.915 3.31929 12.17 1.58325 10.0176 1.58325C7.86506 1.58325 6.12012 3.31929 6.12012 5.4608C6.12012 7.60232 7.86506 9.33838 10.0176 9.33838Z" fill="#FD6D03" />
      <path d="M12.0478 10.9543H7.98799C5.63329 10.9543 3.68457 12.8931 3.68457 15.2358C3.68457 15.8012 3.92816 16.286 4.41534 16.5283C5.14611 16.9322 6.77004 17.4169 10.0179 17.4169C13.2658 17.4169 14.8897 16.9322 15.6204 16.5283C16.0264 16.286 16.3512 15.8012 16.3512 15.2358C16.3512 12.8123 14.4025 10.9543 12.0478 10.9543Z" fill="#FD6D03" />
    </svg>
  );
}
export function DeleteOrange(props) {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25H1.5V12.25ZM11.25 1H8.625L7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1Z" fill="#FD6D03" />
    </svg>
  );
}
export function Driver(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 2.75C9.245 2.75 10.25 3.755 10.25 5C10.25 6.245 9.245 7.25 8 7.25C6.755 7.25 5.75 6.245 5.75 5C5.75 3.755 6.755 2.75 8 2.75ZM8 13.4C6.125 13.4 4.4675 12.44 3.5 10.985C3.5225 9.4925 6.5 8.675 8 8.675C9.4925 8.675 12.4775 9.4925 12.5 10.985C11.5325 12.44 9.875 13.4 8 13.4Z" fill="#212121" fill-opacity="0.7" />
    </svg>
  );
}
