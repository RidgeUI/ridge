import React from 'react'

export default function Radials ({ color1 = '#FFE20345', color2 = '#FF5A00FF', color3 = '#FFDB00FF', color4 = '#FF0049FF', color5 = '#FF7000FF', color6 = '#FF0000FF', slot }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundImage: `radial-gradient(49% 81% at 45% 47%, ${color1} 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, ${color2} 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, ${color3} 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, ${color4} 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, ${color5} 0%, ${color6} 100%)`
    }}
    >
      {slot && slot()}
    </div>
  )
}
