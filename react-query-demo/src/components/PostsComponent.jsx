import { useQuery } from "@tanstack/react-query";

// Fetch posts from API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const PostsComponent = () => {
  // useQuery with additional options
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute fresh
    cacheTime: 1000 * 60 * 5, // keep cache for 5 minutes
    refetchOnWindowFocus: false, // don't refetch when tab is focused
    keepPreviousData: true, // retain old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="space-y-3">
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="list-disc pl-6 space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;