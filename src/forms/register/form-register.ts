export default {
  component: "Form",
  props: {
    name: "createBanner",
    method: "post"
  },
  children: [
    {
      component: "FormControl",
      children: [
        {
          key: "form-name",
          component: "FormGroup",
          children: [
            {
              component: "label",
              children: "Name:"
            },
            {
              component: "Input",
              props: {
                type: "input",
                name: "username"
              }
            }
          ]
        },
        {
          component: "FormGroup",
          children: [
            {
              component: "label",
              children: "Password:"
            },
            {
              component: "Input",
              props: {
                type: "password",
                name: "password"
              }
            }
          ]
        },
        {
          component: "FormGroup",
          children: [
            {
              component: "button",
              props: {
                type: "submitt"
              },
              children: "Login"
            }
          ]
        }
      ]
    }
  ]
};
