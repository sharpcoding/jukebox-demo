import { Node } from "./"

export const testNodes: Node = {
  uuid: "48b3fb82-7907-45fa-a754-f97f427396a0",
  caption: "Programming-languages",
  children: [
    {
      uuid: "9114dcfe-1a4b-498b-899d-0ea650cd4935",
      caption: "Backend",
      children: [
        {
          uuid: "18392fcf-0bde-4d43-a4e6-ce4e387b590f",
          caption: "Functional-languages",
          children: [
            {
              uuid: "a5fd7d8f-feb7-4f06-a9e5-0cb60df930bf",
              caption: "Scala"
            },
            {
              uuid: "d1615f72-2f67-4c51-932a-ac45ce25eaf1",
              caption: "Haskell",
              children: [
                {
                  uuid: "28550149-ca7d-4483-8e74-81c38a1797b2",
                  caption: "Control.Applicative"
                },
                {
                  uuid: "375111ab-0145-41c5-851f-72e286041a41",
                  caption: "Control.Category"
                },
                {
                  uuid: "97342e32-e29b-4589-bb53-951274e2b609",
                  caption: "Control.Monad"
                }
              ]
            }
          ]
        },
        {
          uuid: "627b60f2-3e34-4b05-8eab-fc8304479739",
          caption: "Object-oriented",
          children: [
            {
              uuid: "4785f3a6-e423-42db-a157-55eeee0ef695",
              caption: "Java"
            },
            {
              uuid: "123a8c66-8a43-4f4a-bc99-fd59341368f5",
              caption: "C#"
            }
          ]
        }
      ]
    },
    {
      uuid: "9d7905e3-b447-45f6-9344-393f577c27cc",
      caption: "Frontend"
    },
    {
      uuid: "19e20447-503e-4b94-86a0-bde653c16ae7",
      caption: "Domain-specific"
    }
  ]
}
