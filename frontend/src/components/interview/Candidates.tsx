import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Candidates = () => {
    const [candidates] = useState([
        { id: "1", name: "John Doe", email: "john.doe@example.com", experience: 5 },
        { id: "2", name: "Jane Smith", email: "jane.smith@example.com", experience: 3 },
        { id: "3", name: "Alice Johnson", email: "alice.johnson@example.com", experience: 7 },
        { id: "4", name: "Bob Brown", email: "bob.brown@example.com", experience: 2 },
        { id: "5", name: "Chris White", email: "chris.white@example.com", experience: 4 },
      ]);
    return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
    <CardHeader>
      <h2 className="text-lg font-semibold">Candidates List</h2>
    </CardHeader>
    <Separator />
    <CardContent>
      <ScrollArea className="max-h-60">
        {candidates.length > 0 ? (
          candidates.map((candidate) => (
            <div key={candidate.id} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <p className="text-sm font-medium">
                <strong>Name:</strong> {candidate.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {candidate.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Experience:</strong> {candidate.experience} years
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No candidates have joined yet.</p>
        )}
      </ScrollArea>
    </CardContent>
  </Card>
    )
}

export default Candidates
