import React from 'react'
import { indigo, red, green, purple, orange } from '@material-ui/core/colors'

const colors = [
  indigo[400],
  red[400],
  green[400],
  orange[400],
  purple[400]
]

const UserPlaceholder = ({ num }: { num: number }) => {
  const n = num % colors.length
  const color = colors[n]

  return (
    <svg viewBox="0 0 24 24" fill={color}>
      <path d="M21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.379 1.122-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.379-1.122 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5h-19zM15.598 12.385zM19.438 15.417l-.002-.005v-.001c-.875-2.226-2.484-3.054-3.445-3.549l-.273-.143c.029-.497-.025-1.034-.167-1.599l-.128.032.123-.044c-.765-2.152-1.757-2.585-2.632-2.967l-.006-.003-.535-2.121c.357-.065.628-.375.628-.752.001-.423-.342-.765-.765-.765s-.766.342-.766.765c0 .358.248.657.581.74l-.825 1.654-.014-.003-.024-.003c-1.053-.033-1.842.369-2.5.947-.633-.322-1.515-.729-2.158-1.814.107-.12.174-.276.174-.45 0-.375-.303-.678-.678-.678s-.678.303-.678.678.303.678.678.678l.221-.04c.416.597 1.09 1.181 1.347 2.828l-.072.091.104.081-.112-.067c-1.157 1.914-.793 4.248.207 5.37-.998 2.546-1.035 4.681-.097 5.868l.002.002.003.003c.119.162.313.233.524.233.189 0 .39-.057.559-.154.312-.179.441-.459.326-.713l-.12.054.119-.056c-.581-1.243-.474-2.713.314-4.37.4.131.778.208 1.145.234l.139.73c.264 1.418.514 2.757 1.297 4.006.132.264.453.387.777.387.122 0 .245-.018.357-.051.385-.116.591-.399.537-.738l-.129.021.125-.042c-.204-.606-.431-1.146-.649-1.67-.373-.894-.725-1.742-.891-2.737.407-.042.797-.129 1.161-.261.825.692 1.661 1.492 2.743 3.406h.001c.072.14.224.215.41.215.105 0 .222-.024.339-.073.365-.155.652-.531.477-1.006v-.001c-.432-1.849-1.426-2.778-2.428-3.547.162-.175.311-.366.442-.576.75.399 1.878 1.005 3.127 2.766l.047.067.011-.008c.151.156.317.24.48.24.096 0 .191-.027.279-.084.306-.194.439-.662.29-1.005zm-8.878-2.493c-.947 0-1.713-.767-1.713-1.713s.767-1.713 1.713-1.713c.947 0 1.713.767 1.713 1.713s-.767 1.713-1.713 1.713zm6.587 4.648l-.084.021v-.001l.084-.02zm-2.007-5.312zm.022 1.006zM11.225 11.604c0 .385-.312.697-.697.697s-.697-.312-.697-.697c0-.385.312-.697.697-.697s.697.312.697.697z"/>
    </svg>
  )
}

export default UserPlaceholder
