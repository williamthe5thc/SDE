// src/pages/admin/components/AdminContent.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Image, Edit, Trash2, Plus } from 'lucide-react';

const AdminContent = () => {
  const content = [
    {
      id: 1,
      title: 'Dance Styles Overview',
      type: 'page',
      lastModified: '2024-02-28',
      status: 'Published'
    },
    // Add more content items
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Content Management</h2>
        <div className="flex gap-2">
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            New Page
          </Button>
          <Button>
            <Image className="h-4 w-4 mr-2" />
            Add Media
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Last modified: {item.lastModified}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;