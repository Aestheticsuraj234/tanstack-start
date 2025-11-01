import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$id')({
  component: RouteComponent,
  notFoundComponent: () => <div>Not Found</div>,
  errorComponent: ({ error }) => <div className='text-red-500 font-extrabold text-lg'>Error: {error.message}</div>,
  pendingComponent: () => <div>Loading...</div>,
  loader: async ({ params }) => {


    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    if (!user.id) {
      throw notFound();
    }


    return { user }


  }
})

function RouteComponent() {

  const data = Route.useLoaderData()

  console.log(data)
  return (
    <div>
      hello , this is the user:  {JSON.stringify(data)}
    </div>
  )
}
