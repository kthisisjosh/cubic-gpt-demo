import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
  Button
} from '@tremor/react';
import { CaseWithPatientStatus } from '../lib/types';

interface CasesTableProps {
  cases: CaseWithPatientStatus[];
}

export default function CasesTable({ cases }: CasesTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Date of Birth</TableHeaderCell>
          <TableHeaderCell>Drug Requested</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cases.map(
          ({
            case_id,
            patient_id,
            name,
            date_of_birth,
            drug_requested,
            label: status_label
          }) => (
            <TableRow key={patient_id}>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Text>{new Date(date_of_birth).toLocaleDateString()}</Text>
              </TableCell>
              <TableCell>{drug_requested}</TableCell>
              <TableCell>
                <Badge>{status_label}</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" tooltip="Click to view case information">
                  <a href={`/cases/${case_id}`}>View</a>
                </Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}