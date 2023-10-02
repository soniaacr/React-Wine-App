import { useSubmit } from "react-router-dom"
import Button from "./Button"
import { Input } from '../SharedComponents/Input'
import { server_calls } from '../api/server'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useForm } from 'react-hook-form'
import { chooseBrand, chooseType, chooseOrigin, chooseYear } from '../redux/slices/RootSlice'

interface WineFormProps {
  id?: string;
  data?: {};
}

interface WineState{
  brand: string;
  type: string;
  origin: string;
  year: string;
}

export const WineForm = (props:WineFormProps) => {
  const dispatch = useDispatch();
  const store = useStore();
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id!) {
      server_calls.update(props.id!, data);
      console.log(`Updated: ${ data } ${ props.id }`);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
          // Dispatch basically updates our state / Redux store
      dispatch(chooseBrand(data.brand));
      dispatch(chooseType(data.type));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseYear(data.year));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="brand">Wine Brand</label>
          <Input {...register('brand')} name='Brand' placeholder="Wine Brand" />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Input {...register('type')} name='Type' placeholder="Type" />
        </div>
        <div>
          <label htmlFor="origin">Origin</label>
          <Input {...register('origin')} name='Origin' placeholder="Origin" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <Input {...register('year')} name='Year' placeholder="Year" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WineForm