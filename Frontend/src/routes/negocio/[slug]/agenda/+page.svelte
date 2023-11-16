<script>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  import '@event-calendar/core/index.css';

  let collabArray = [
    { name: 'Colaborador 1', isChecked: true },
    { name: 'Colaborador 2', isChecked: false },
    { name: 'Colaborador 3', isChecked: false },
  ];

  let plugins = [TimeGrid];
  let options = { view: 'timeGridWeek',
    locale: 'es',
    events: [],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    // allDayContent: 'Dia libre',
    allDaySlot: false,
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}}

  let options1 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 4',
        start: '2023-11-09T08:00:00',
        end: '2023-11-09T14:00:00'
      },
      {
        title: 'Descanso de Rosa',
        start: '2023-11-05',
        end: '2023-11-05',
        backgroundColor: '#9f53ff'
      }
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }

  let options2 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 2',
        start: '2023-11-06T14:00:00',
        end: '2023-11-06T17:00:00'
      },
      {
        title: 'Evento 3',
        start: '2023-11-08T08:00:00',
        end: '2023-11-08T15:00:00'
      },
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }
  
  let options3 = {
    view: 'timeGridWeek',
    locale: 'es',
    events: [
      // poner eventos: title, start, end.
      {
        title: 'Evento 1',
        start: '2023-11-06T10:00:00',
        end: '2023-11-06T18:00:00'
      }
      
    ],
    eventBackgroundColor: '#7A8ADA',
    eventClassNames: ['iris_green', 'iris_blue', 'iris_purple', 'border', 'border-black', 'rounded-2xl'],
    nowIndicator: true,
    slotDuration: '00:30:00',
    allDayContent: 'Dia libre',
    noEventsContent: 'Aun no se ha agendado nadie',
    headerToolbar: {start: 'title', center: '', end: 'prev,next'}
  }

  let selectedCollaborator;
  $: {
    console.log(selectedCollaborator);
    switch(selectedCollaborator) {
      case 'Colaborador 1':
        options.events = [
        {
        title: 'Evento 4',
        start: '2023-11-09T08:00:00',
        end: '2023-11-09T14:00:00'
      },
      {
        title: 'Descanso de Rosa',
        start: '2023-11-05',
        end: '2023-11-05',
        backgroundColor: '#9f53ff'
      }];
      case 'Colaborador 2':
        options.events = [
        {
        title: 'Evento 2',
        start: '2023-11-06T14:00:00',
        end: '2023-11-06T17:00:00'
      },
      {
        title: 'Evento 3',
        start: '2023-11-08T08:00:00',
        end: '2023-11-08T15:00:00'
      },];
      case 'Colaborador 3':
        options.events =[
          {
        title: 'Evento 1',
        start: '2023-11-06T10:00:00',
        end: '2023-11-06T18:00:00'
      }
        ];
    }
  }
</script>
<div class='flex flex-col items-start mt-7 mb-36 text-black'>
  <h1 class='text-4xl font-bold my-10 ml-5'>MI AGENDA</h1>
<div class="flex justify-center items-center w-full pr-10 gap-10 mx-5">
  <!-- <div>
    {#each collabArray as collaborator}
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">{collaborator.name}</span> 
        <input 
        type="radio" 
        name="radio-10" 
        class="radio" 
        bind:group={selectedCollaborator} 
        value={collaborator.name}/>
      </label>
    </div>
    {/each}
  </div> -->
  <div class='justify-center items-center w-full'>
    <div class='bg-white ec-auto-dark text-black'>
      <Calendar {plugins} {options} />
      <!-- Display content based on the selected collaborator
      {#if selectedCollaborator === 'Colaborador 1'}
        <Calendar {plugins} {options} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 2'}
        <Calendar {plugins} {options} />
      {/if}
      {#if selectedCollaborator === 'Colaborador 3'}
        <Calendar {plugins} {options} />
      {/if} -->
      
    </div>
  </div>
</div>
</div>