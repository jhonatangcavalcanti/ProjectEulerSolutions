let solver = () => {
  return 1
}
//
// export default function work (self) {
//   self.addEventListener('message', () => {
//     console.log('inside onmessage')
//     let result = solver()
//     console.log('posting message..')
//     self.postMessage(result)
//     console.log('posted')
//   })
// }

// onmessage = function(e) {
export default function work (self) {
  self.addEventListener('message', () => {
    let result = solver()
    postMessage(result)
  })
}
