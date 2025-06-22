import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import PropertyForm from "@/components/admin/PropertyForm";

// Mock data - same as Properties.tsx
const mockProperties = [
  {
    id: "1",
    title: "Garsonieră dublă ultracentral - Bulevardul Carol Nr. 62",
    price: 61000,
    location: "Apartament cu 1 camera de vânzare P-ța Universității, București",
    area: 35,
    rooms: 1,
    type: "Apartament cu 1 camera de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "2",
    title: "Teren pentru construcție bloc | sau duplexuri | 710 mp",
    price: 69900,
    location: "Teren de 710 mp de vânzare Rudimea",
    area: 710,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "3",
    title: "Apartament 3 camere Pipera Școala Americană",
    price: 150000,
    location: "Apartament cu 3 camere de vânzare Pipera, București",
    area: 85,
    rooms: 3,
    type: "Apartament cu 3 camere de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "4",
    title:
      "Oportunitatea! Complex Rezidențial max.P+14 Str. Aerodrumului Militar",
    price: 1100000,
    location: "Teren de 8.669 mp de vânzare Militari, București",
    area: 8669,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "5",
    title: "Teren pentru construcție hala | 2700 mp | Chiaoda",
    price: 270000,
    location: "Teren de 2717 mp de vânzare Săguleț, Timisoara",
    area: 2717,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "6",
    title: "Teren de vânzare Domestești - Str. Narciselor - 2032mp",
    price: 185000,
    location: "Teren de vânzare Domestești",
    area: 2032,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
];

type Property = (typeof mockProperties)[0];

const AdminProperties = () => {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [deletingProperty, setDeletingProperty] = useState<Property | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = () => {
    setEditingProperty(null);
    setIsFormOpen(true);
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setIsFormOpen(true);
  };

  const handleDelete = (property: Property) => {
    setDeletingProperty(property);
  };

  const confirmDelete = () => {
    if (deletingProperty) {
      setProperties(properties.filter((p) => p.id !== deletingProperty.id));
      setDeletingProperty(null);
    }
  };

  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (editingProperty) {
      // Update existing property
      setProperties(
        properties.map((p) =>
          p.id === editingProperty.id ? { ...editingProperty, ...data } : p,
        ),
      );
    } else {
      // Create new property
      const newProperty: Property = {
        id: String(Date.now()),
        ...data,
        badges: [],
      };
      setProperties([newProperty, ...properties]);
    }

    setIsLoading(false);
    setIsFormOpen(false);
    setEditingProperty(null);
  };

  const handleViewProperty = (property: Property) => {
    window.open(`/proprietate/${property.id}`, "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Gestionare Proprietăți
          </h1>
          <p className="text-gray-600 mt-2">
            Administrează proprietățile din portofoliu
          </p>
        </div>
        <Button onClick={handleCreate} className="bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Adaugă Proprietate
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Proprietăți
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{properties.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Valoare Totală
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €
              {properties.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Preț Mediu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €
              {Math.round(
                properties.reduce((sum, p) => sum + p.price, 0) /
                  properties.length,
              ).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Properties Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista Proprietăților</CardTitle>
          <CardDescription>
            Toate proprietățile din sistem cu opțiuni de editare și ștergere
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titlu</TableHead>
                <TableHead>Tip</TableHead>
                <TableHead>Preț</TableHead>
                <TableHead>Suprafață</TableHead>
                <TableHead>Locație</TableHead>
                <TableHead className="text-right">Acțiuni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium max-w-xs">
                    <div className="truncate" title={property.title}>
                      {property.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {property.type
                        .replace("de vânzare", "")
                        .replace("de închiriat", "")
                        .trim()}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold">
                    €{property.price.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {property.area} mp
                    {property.rooms && ` • ${property.rooms} cam`}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div
                      className="truncate text-sm text-gray-600"
                      title={property.location}
                    >
                      {property.location}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewProperty(property)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(property)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(property)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Property Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProperty
                ? "Editează Proprietatea"
                : "Adaugă Proprietate Nouă"}
            </DialogTitle>
            <DialogDescription>
              {editingProperty
                ? "Modifică detaliile proprietății selectate"
                : "Completează formularul pentru a adăuga o nouă proprietate"}
            </DialogDescription>
          </DialogHeader>
          <PropertyForm
            initialData={editingProperty || undefined}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsFormOpen(false)}
            isLoading={isLoading}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deletingProperty}
        onOpenChange={() => setDeletingProperty(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmare Ștergere</AlertDialogTitle>
            <AlertDialogDescription>
              Ești sigur că vrei să ștergi proprietatea "
              {deletingProperty?.title}"? Această acțiune nu poate fi anulată.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anulează</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Șterge
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminProperties;
