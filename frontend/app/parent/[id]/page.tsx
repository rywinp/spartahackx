// app/parent/[id]/page.tsx
  
  // Generate static paths at build time
//   export async function generateStaticParams() {
//     // Fetch parent items from your API
//     const parents: Parent[] = await fetch('https://api.example.com/parents')
//       .then(res => res.json());
  
//     return parents.map(parent => ({
//       id: parent.id.toString()
//     }));
//   }
  
  interface PageProps {
    params: {
      id: string;
    };
  }
  
  export default async function ParentPage({ params }: PageProps) {
    // Fetch individual parent data
    // const parent: Parent = await fetch(
    //   `https://api.example.com/parents/${params.id}`, 
    //   { next: { revalidate: 60 } } // ISR: Revalidate every 60 seconds
    // ).then(res => res.json());
  
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{}</h1>
        <p className="text-lg">ID: {params.id}</p>
        {/* Add more content here */}
      </main>
    );
  }