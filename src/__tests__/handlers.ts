// test/handlers.ts
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const catFetchHandler = http.get("/api/cats/", () => {
  return HttpResponse.json({
    id: 2,
    imageSource:
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Captain Marmalade",
    age: 4,
    occupation: "Explorer of Forbidden Closets",
    hobby: "Treasure hunts (for socks)",
    origin: "The Wild Rugs of Livingrooma",
    backstory:
      "Born under a crooked coffee table, Captain Marmalade has always had a thirst for adventure. From scaling laundry mountains to disappearing into mysterious closets, he carries a single mission: find all lost socks and claim them as trophies.",
  });
});

export const server = setupServer(catFetchHandler);
