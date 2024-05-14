import { TabsContent } from "../ui/tabs";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "../ui/table";
import { Card, CardContent, CardTitle, CardDescription, CardHeader, CardFooter } from "../ui/card";
import DropdownMenuProduct from "./dropdownmenuproductview";
import Image from "next/image";

export function ProductTabList({name, desc, columns, data}) {
    return (
        <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>
                    {desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        {columns.forEach(el => {
                            return (
                                <TableHead>{el}</TableHead>
                            )
                        })}
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>

                        <TableCell className="font-medium">
                          Sistema Ético
                        </TableCell>
                        <TableCell>
                          2º ANO
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenuProduct/>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
    )
}