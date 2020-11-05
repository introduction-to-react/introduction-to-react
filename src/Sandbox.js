export default ({ example }) => (
  <iframe
    src={`https://codesandbox.io/embed/github/introduction-to-react/introduction-to-react/tree/master/examples/${example}?fontsize=14&hidenavigation=1&theme=dark`}
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="my-app"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
)
