import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const posts = [
  { id: 1, title: "Introducing the new React framework", author: "Jane Doe", commentsLink: "#" },
  { id: 2, title: "Understanding Async/Await in JavaScript", author: "John Doe", commentsLink: "#" },
  { id: 3, title: "Why functional programming matters", author: "Alice Johnson", commentsLink: "#" }
];

const Index = () => {
  return (
    <Box p={5} bg="#f6f6ef">
      <VStack spacing={4} align="stretch">
        {posts.map(post => (
          <Box key={post.id} p={5} bg="transparent">
            <Text fontSize="14px" color="#828282">
              <Link color="teal.500" href={post.commentsLink}>{post.title}</Link>
            </Text>
            <Text mt={2} fontSize="12px" color="#828282">
              {post.author}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;