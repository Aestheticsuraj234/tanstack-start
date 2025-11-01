import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id')({
  component: RouteComponent,
  notFoundComponent: () => <div>Not Found</div>,

  loader: ({ params }) => {

    if (Number(params.id) > 10) {
      throw notFound();
    }

    const resp = {userName:'Suraj'};

    return resp

  }
})

function RouteComponent() {
  const { id } = Route.useParams()
  const data = Route.useLoaderData()

  return <div>Hello "/user"{id} , {data.userName}</div>
}
