import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useUi } from '@common/context/UiContext/utils';
import { FormValues } from '@common/types/forms';
import { useGetAllEvents } from '@hooks/useEvents';
import { APIEventType } from '@types';
import { createEvent, getAllEvents } from '@utils/events/api';
import { parseEvent } from '@utils/events/parsers';

export const useCreateEvent = () => {
  const { setCurrentModal } = useUi();
  const { push } = useRouter();
  const { mutate } = useGetAllEvents();

  const { register, handleSubmit, formState, getValues, setError, reset } =
    useForm<FormValues>({
      mode: 'onChange',
    });

  const onCreateSuccess = useCallback(() => {
    mutate(async () => {
      return await getAllEvents().then((events) =>
        events.map((event: APIEventType) => parseEvent(event))
      );
    });
    setCurrentModal(undefined);
    push('/events');
  }, [mutate, push, setCurrentModal]);

  const onCreateError = useCallback(() => {
    setError('submit', { message: 'Failed to create event' });
  }, [, setError]);

  const onSubmit = useCallback(async () => {
    const { title, description, date, time, capacity } = getValues();
    const fullDate = new Date(`${date} ${time}`).toISOString();

    const event = { title, description, startsAt: fullDate, capacity };

    await createEvent({
      event,
      onSuccess: onCreateSuccess,
      onError: onCreateError,
    });
  }, [getValues, onCreateError, onCreateSuccess]);

  return {
    onSubmit,
    register,
    handleSubmit,
    formState,
    reset,
  };
};
