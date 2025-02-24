# Step 1: Use an official Node.js image as the base image
FROM node:18 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a smaller image for the production environment
FROM node:18-slim

# Step 8: Set the working directory inside the container
WORKDIR /app

# Step 9: Copy the build and node_modules from the builder image
COPY --from=builder /app ./

# Step 10: Expose the port that Next.js will run on
EXPOSE 3000

# Step 11: Start the Next.js application in production mode
CMD ["npm", "run" , "dev"]
