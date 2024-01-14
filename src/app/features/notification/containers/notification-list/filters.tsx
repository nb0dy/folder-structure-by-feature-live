import { Button, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useDevices } from '../../../device/data-access';
import { useLocations } from '../../../location/data-access';

const Title = styled('div')(({ theme }) => ({
  paddingBottom: 10,
  color: theme.palette.secondary.dark,
  fontSize: 15,
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
}));

const FilterSection = styled('div')({
  width: '100%',
});

const FilterButton = styled(Button)((props) => ({
  height: props.theme.typography.pxToRem(35),
  marginTop: props.theme.typography.pxToRem(8),
}));

const ResetButton = styled(Button)((props) => ({
  marginTop: props.theme.typography.pxToRem(8),
}));

const Form = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  width: '100%',
  marginBottom: 8,
  gap: `5px 25px`,
});

const FilterGroup = styled('div')({
  display: 'flex',
  gap: '25px',
});

export interface IFilterForm {
  locationId: string | undefined;
  deviceId: string | undefined;
}

interface IFilterProps {
  locationId: string | undefined;
  deviceId: string | undefined;
  onSubmit: (value: IFilterForm) => void;
  onClear: () => void;
}

export const Filters = ({ onSubmit, onClear, locationId, deviceId }: IFilterProps): JSX.Element => {
  const devices = useDevices();
  const locations = useLocations();

  const form = useForm<IFilterForm>({
    defaultValues: {
      locationId,
      deviceId,
    },
    mode: 'onSubmit',
  });

  return (
    <FormProvider {...form}>
      <FilterSection>
        <Title>
          <div>Filters</div>
        </Title>
        <Form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <FilterGroup>
            <Controller
              name="locationId"
              control={form.control}
              defaultValue={''}
              render={({ field }) => (
                <Select {...field} label="Locations" style={{ minWidth: 250, maxWidth: 250 }}>
                  {locations.data?.map((location) => (
                    <MenuItem key={location.id} value={location.id}>
                      {location.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              name="deviceId"
              control={form.control}
              defaultValue={''}
              render={({ field }) => (
                <Select {...field} label="Devices" style={{ minWidth: 250, maxWidth: 250 }}>
                  {devices.data?.map((device) => (
                    <MenuItem key={device.id} value={device.id}>
                      {device.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FilterGroup>
          <ResetButton variant="text" onClick={onClear}>
            Clear
          </ResetButton>
          <FilterButton color="primary" data-testid="filter-location" type="submit">
            Filter
          </FilterButton>
        </Form>
      </FilterSection>
    </FormProvider>
  );
};
