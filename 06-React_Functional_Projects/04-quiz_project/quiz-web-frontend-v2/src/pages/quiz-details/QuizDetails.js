import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  SportsSoccer as Soccer
} from '@mui/icons-material';

import { useQuizContext } from '../../context/QuizContext';
import { useQuizPlayContext } from '../../context/QuizPlayContext';

import { useNavigate } from 'react-router-dom';

export const QuizDetails = () => {
    const navigate = useNavigate();
    const quizContext = useQuizContext();
    const quizPlayContext = useQuizPlayContext();
    const [data, setData] = useState(quizContext.quizDetail);

  const columns = useMemo(
    //column definitions...
    () => [
        {
            accessorKey: 'quizName',
            header: 'Quiz Name',
            size: 150,
        },
        {
            accessorKey: 'quizCategory',
            header: 'Category',
            size: 150,
        },
        {
            accessorKey: 'quizDuration',
            header: 'Duration',
            size: 150,
        },
        {
          accessorKey: 'quizMaxPoints',
          header: 'Max-Points',
          size: 150,
        },
        {
          accessorKey: 'totalQuestions',
          header: 'No. of questions',
          size: 150,
        },
    ],
    [],
    //end
  );
  
  const handlePlayIcon = (row) => {
    let quizId = row.id;

    let quizQuestions = quizContext.allQuestions.filter(question => question.quizId == quizId);

    quizPlayContext.setSelectedQuizDetail(row);
    quizPlayContext.setSelectedQuizQuestions(quizQuestions);

    navigate("/play-quiz", {state: {name: "vissshaal"}})
  }

  const handleEditIcon = () => {
    console.log("Edit icon clicked");
  }

  const handleDeleteIcon = () => {
    console.log("Delete icon clicked");
  }

  console.log(quizPlayContext, ">>>>quizPlayContext in quiz detail page");
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      layoutMode="grid"
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 180, //if using layoutMode that is not 'semantic', the columns will not auto-size, so you need to set the size manually
          grow: false,
        },
      }}
      enableRowActions
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <IconButton
            color="primary"
            onClick={()=>handlePlayIcon(row.original)}
          >
            <Soccer />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={handleEditIcon}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={handleDeleteIcon}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    />
  );
};

export default QuizDetails;